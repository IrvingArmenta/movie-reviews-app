import gql from 'graphql-tag';

export default gql`
mutation CreateMovieMutation($id: ID!, $title: String!, $synopsis: String!, $image: String!, $year: String!, $cast: [String]!, $ratings: String!) {
    createMovie(
        id: $id
        title: $title
	      synopsis: $synopsis
	      image: $image
	      year: $year
        cast: $cast
        ratings: $ratings
    ) {
        id
        title
	      synopsis
	      image
	      year
        cast
        ratings
    }
}`;