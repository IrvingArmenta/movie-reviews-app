import React, { Component } from "react";

export default class MoviesList extends Component {

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