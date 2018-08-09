import gql from 'graphql-tag';

export default gql`
mutation DeleteMovieMutation($id: ID!) {
    deleteMovie(id: $id) {
        id
        title
	      synopsis
	      image
	      year
        cast
        ratings
    }
}`;