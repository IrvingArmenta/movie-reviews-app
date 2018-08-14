import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// specific element styles [css modules]
import style from './app.module.scss'

// css global styles
import globalStyles from './common/styles/common.scss'

const client = new AWSAppSyncClient({
  url: AppSync.graphqlEndpoint,
  region: AppSync.region,
  auth: {
    type: AUTH_TYPE.API_KEY,
    apiKey: AppSync.apiKey,
  },
});

// scss modules test
//console.log(style);

// Components
import MoviesList from "./components/movies_list";
import CreateMovie from "./components/create_movie";
import NotFound from "./components/not_found";
import Header from "./components/header";


// GraphQL
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from 'aws-appsync-react';
import { AUTH_TYPE } from "aws-appsync/lib/link/auth-link";
import { graphql, ApolloProvider, compose } from 'react-apollo';
import AppSync from './app_sync';
import ListAllMoviesQuery from './queries/list_all_movies';
import CreateMovieQuery from './queries/create_movie';
import DeleteMovieQuery from './queries/delete_movie';
import UpdateMovieQuery from './queries/update_movie';

class App extends Component {
  render() {
    return(
      <div>
      <Router>
        <section className={style.section}>
          <Header />
          <Switch>
            <Route exact path='/add_review' component={AddMovieReview} />
            <Route exact path='/' component={ListOfReviewedMovies} />
            <Route component={NotFound}/>
          </Switch>
        </section>
      </Router>
      </div>
    )
  }
}

const ListOfReviewedMovies = compose(
  graphql(ListAllMoviesQuery, {
    options: {
      fetchPolicy: 'cache-and-network'
    },
    props: (props) => ({
      movies: props.data.listMovies && props.data.listMovies.items,
    })
  }),

  graphql(DeleteMovieQuery, {
    props: (props) => ({
      onDelete: (movie) => props.mutate({
        variables: { id: movie.id },
        optimisticResponse: () => ({ deleteMovie: { ...movie } }),
      })
    }),
    options: {
      refetchQueries: [{ query: ListAllMoviesQuery }],
      update: (proxy, { data: { deleteMovie: { id } } }) => {
        const query = ListAllMoviesQuery;
        const data = proxy.readQuery({ query });

        data.listMovies.items = data.listMovies.items.filter(movie => movie.id !== id);

        proxy.writeQuery({ query, data });
      }
    }
  }),

  graphql(UpdateMovieQuery, {
    props: (props) => ({
      onEdit: (movie) => {
        props.mutate({
          variables: { ...movie },
          optimisticResponse: () => ({ updateMovie: { ...movie } }),
        })
      }
    }),
    options: {
      refetchQueries: [{ query: ListAllMoviesQuery }],
      update: (dataProxy, { data: { updateMovie } }) => {
        const query = ListAllMoviesQuery;
        const data = dataProxy.readQuery({ query });

        data.listMovies.items = data.listMovies.items.map(movie => movie.id !== updateMovie.id ? movie : { ...updateMovie });

        dataProxy.writeQuery({ query, data });
      }
    }
  })
)(MoviesList);

const AddMovieReview = graphql(CreateMovieQuery, {
  props: (props) => ({
    onAdd: movie => props.mutate({
      variables: movie,
      optimisticResponse: () => ({ createMovie: { ...movie } }),
    })
  }),
  options: {
    refetchQueries: [{ query: ListAllMoviesQuery }],
    update: (dataProxy, { data: { createMovie } }) => {
      const query = ListAllMoviesQuery;
      const data = dataProxy.readQuery({ query });

      data.listMovies.items.push(createMovie);

      dataProxy.writeQuery({ query, data });
    }
  }
})(CreateMovie);

const WithProvider = () => (
  <ApolloProvider client={client}>
    <Rehydrated>
        <App />
    </Rehydrated>
  </ApolloProvider>
);

export default WithProvider;
