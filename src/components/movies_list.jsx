import React, { Component } from "react";
import styles from './movies_list.module.scss'


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
    if (window.confirm('Are you sure?')) {
      this.props.onDelete(movie);
    }
  };

  handleEdit = (movie) => {
    // TODO - implement edit
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
    <div>
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
    </div>
    );
  }
}
