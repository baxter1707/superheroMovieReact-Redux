import React, { Component } from 'react';
import * as actionTypes from '../store/actions'
import { connect } from 'react-redux'
import MovieResult from './MovieResult'



class MainPage extends Component {
  constructor(props){
    super(props)

    this.state = {
      title : '',
      imageURL : ''
    }
  }


  onTitleChange = (event) => {
    this.setState({
      title : event.target.value
    })
  }

  onURLChange = (event) => {
    this.setState({
      imageURL : event.target.value
    })
  }


  render() {
    return(
      <div>
        <h1> SuperHero </h1>
        <input onChange={this.onTitleChange} type='text' placeholder='Title of Movie'/>
        <input onChange={this.onURLChange} type='text' placeholder = "URL of movie poster" />
        <button onClick={() => this.props.onSaveTitle(this.state.title,this.state.imageURL)}>Save Title</button>
        <h2> List </h2>
        <MovieResult userResults={this.props.input}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    input : state.userInput
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSaveTitle : (title,imageURL) => dispatch({type:actionTypes.ON_SAVE_TITLE, payload : {name:title , url:imageURL}})
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (MainPage)
