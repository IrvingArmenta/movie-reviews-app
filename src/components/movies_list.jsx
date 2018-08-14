import React, { Component } from "react";

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
  }

  static defaultProps = {
    movies: [],
    onDelete: () => null,
    onEdit: () => null,
  };

  handleDelete = (movie) => {
    if (window.confirm('Are you sure ?')) {
      this.props.onDelete(movie);
    }
  };

  handleEdit = (movie) => {
  };


  renderMovies = (movie) => {
    return (
      <tr key={movie.id}>
        <td>{movie.title}</td>
        <td>{movie.synopsis}</td>
        <td>{movie.image}</td>
        <td>{movie.year}</td>
        <td>{movie.cast}</td>
        <td>{movie.ratings}</td>
        <td>
          <button onClick={this.handleEdit.bind(this, movie)}>Edit</button>
          <button onClick={this.handleDelete.bind(this, movie)}>Delete</button>
        </td>
      </tr>
    );
  };

  render() {
    const { movies } = this.props;
    return (
      <table>
        <thead>
        <tr>
          <th>title</th>
          <th>synopsis</th>
          <th>image</th>
          <th>year</th>
          <th>cast</th>
          <th>ratings</th>
          <th>action</th>
        </tr>
        </thead>
        <tbody>
        {[].concat(movies).sort((a, b) => b.id - a.id).map(this.renderMovies)}
        </tbody>
      </table>
    );
  }
}
