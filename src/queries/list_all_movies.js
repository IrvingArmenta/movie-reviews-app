import graphql from 'graphql-tag'

export default graphql `
	query ListAllMovies {
		listMovies {
			items {
			  id
				title
	      synopsis
	      image
	      year
        cast
        ratings
			}
		}
	}
`