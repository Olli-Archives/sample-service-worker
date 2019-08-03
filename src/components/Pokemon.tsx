import React, { Component } from 'react';
import axios from 'axios';

type fetchState = {
  loading:boolean,
  data:Array<{}>
}

export class Pokemon extends Component<{},fetchState>{

  componentDidMount(){
    this.setState({loading:true})
    axios
    .request({
      url:'https://pokeapi.co/api/v2/type/3/',
      method:'get'
    })
    .then(response=>{
      console.log('response', response);
      this.setState(  
        {
        loading:false,
        data:response.data.pokemon
      })
    })
  }




  render(){
    return(
      <div>
        hi
      </div>
      )
  }
}