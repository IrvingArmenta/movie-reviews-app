import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { Textarea } from "react-inputs-validation";

export default class CreateMovie extends Component {

  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  componentDidMount() {
  	// Get the components DOM node
  	var elem = ReactDOM.findDOMNode(this)
  	// Set the opacity of the element to 0
  	elem.style.opacity = 0;
  	window.requestAnimationFrame(function() {
  		// Now set a transition on the opacity
  		elem.style.transition = "opacity 600ms ease-in-out";
  		// and set the opacity to 1
  		elem.style.opacity = 1;
  	});
  }

  getInitialState = () => {
    return ({
      id: '',
      title: '',
      synopsis: '',
      image: '',
      year: '',
      cast: '',
      ratings: '',
    })
  };

  handleChange = (field, event) => {
    const { target: { value } } = event;

    this.setState({
      [field]: value
    });
  };

  handleAdd = () => {
    const { id, title, synopsis, image, year, cast, ratings, } = this.state;
    // post to AWS
  };

  handleCancel = () => {
    this.setState(this.getInitialState());
  };

  render() {
    const { id, title, synopsis, image, year, cast, ratings, } = this.state;
    return (
      <fieldset >
        <legend>Add New Movie Review</legend>
        <div>
          <label>ID<input type="text" placeholder="ID" value={id} onChange={this.handleChange.bind(this, 'id')} /></label>
        </div>
        <div>
          <label>Title<input type="text" placeholder="Title" value={title} onChange={this.handleChange.bind(this, 'title')} /></label>
        </div>
        <div>
          <label>Synopsis
            <Textarea id="synopsis" placeholder="Add your synopsis" onChange={(description, e) => {this.handleChange.bind(this, 'synopsis')}} onBlur={(e) => {console.log(e)}} />
          </label>
        </div>
        <div>
          <label>Image<input type="text" placeholder="Image" value={image} onChange={this.handleChange.bind(this, 'image')} /></label>
        </div>
        <div>
          <label>Year<input type="text" placeholder="Year" value={year} onChange={this.handleChange.bind(this, 'year')} /></label>
        </div>
        <div>
          <label>Cast<input type="text" placeholder="Cast" value={cast} onChange={this.handleChange.bind(this, 'cast')} /></label>
        </div>
        <div>
          <label>Ratings<input type="text" placeholder="Ratings" value={ratings} onChange={this.handleChange.bind(this, 'ratings')} /></label>
        </div>
        <div>
          <button onClick={this.handleAdd}>add review</button>
          <button onClick={this.handleCancel}>cancel</button>
        </div>
      </fieldset>
    );
  }
}
