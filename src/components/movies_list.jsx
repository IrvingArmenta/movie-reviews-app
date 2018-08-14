import React, { Component } from "react";
import styles from './movies_list.module.scss'
import Grid from 'mauerwerk'
import Media from "react-media";

const MoviesGrid = ({ movies, columns }) =>  (
    <Grid
      className="grid"
      // Arbitrary data, should contain keys, possibly heights, etc.
      data={movies}
      // Key accessor, instructs grid on how to fetch individual keys from the data set
      keys={d => d.id}
      // Can be a fixed value or an individual data accessor (for variable heights)
      heights={300}
      // Optional: number of columns (make it responsive yourself using react-measure/react-media)
      columns={columns}
      // Optional: space between elements
      margin={30}
      // Optional: removes the possibility to scroll away from a maximized element
      lockScroll={true}>
      {(data, open, toggle) => (
        <div>
          {open &&
          <div className={open ? 'Close' : 'Open'}>
              <p>{data.title}</p>
              <p>{data.synopsis}</p>
              <p><img src={data.image} /></p>
              <p>{data.year}</p>
              <p>{data.cast}</p>
              <p>{data.ratings}</p>
          </div>
          }
          <button onClick={toggle}>{open ? 'Close' : 'Open'}</button>
        </div>
      )}
    </Grid>
)

class MoviesList extends Component {

  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  static defaultProps = {
    movies: [],
    onDelete: () => null,
    onEdit: () => null,
  };

  handleDelete = (movie) => {
    if (window.confirm('Are you sure?')) {
      this.props.onDelete(movie);
    }
  };

  handleEdit = (movie) => {
    // TODO - implement edit
  };

  render() {
    const { movies } = this.props;
    return (
        <Media query="(min-width: 767px)">
          {matches =>
            <MoviesGrid movies={movies} columns={matches ? (4) : (1)} />
          }
      </Media>
    );
  }
}

export default MoviesList;
