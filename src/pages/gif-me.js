import React, { Component } from 'react';
import axios from 'axios';

import Layout from '../components/layout';

class GifMe extends Component {

  constructor(){
    super();
    this.typingTimeout = 0;

    this.state = {
      gifySearchTag: 'Rick and Morty',
      gifySource: '',
      gifyTitle: '',
      imageUrl: ''
    }

    // Methods.
    this.searchGifyInput = this.searchGifyInput.bind(this);
    this.randomGif = this.randomGif.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  componentDidMount() {
    this.randomGif();
  }

  searchGifyInput(event) {
    this.setState({gifySearchTag: event.target.value});
    if(this.typingTimeout) clearTimeout(this.typingTimeout)

    this.typingTimeout = setTimeout(() => {
      this.randomGif();
    }, 500);
  }

  keyPress(e){
    if(e.keyCode === 13){
      this.randomGif();
    }
  }

  randomGif() {
    axios.get(`http://api.giphy.com/v1/gifs/random?tag=${this.state.gifySearchTag}&api_key=S2yXMMc8VI8qHZNdR2PWH086Ff8fI52w&limit=1`)
    .then(response => {
        console.log(response.data.data);
        this.setState({ imageUrl: response.data.data.images.original.url });
        this.setState({ gifySource: response.data.data.source });
        this.setState({ gifyTitle: response.data.data.title });
    })
    .catch(error => {
      this.setState({ imageUrl: '' });
    });
  }


  render() {
    return (
      <Layout>
        <div className="container">
          <img src={this.state.imageUrl} alt="gif" width="350"/>
          <input type="text" onChange={this.searchGifyInput} onKeyDown={this.keyPress} />
          <button onClick={this.randomGif}>Give Me Another {this.state.gifySearchTag}!</button>
          <h1>{this.state.gifyTitle}</h1>
          <a href={this.state.gifySource}>Source</a>
        </div>
      </Layout>
    )
  }
}

export default GifMe;