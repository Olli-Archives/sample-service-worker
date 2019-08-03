import React, { Component } from 'react';
import axios from 'axios';
import { PokemonNames } from './PokemonNames';

type fetchState = {
  loading:boolean,
  data:Array<any>
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
     
        this.state && this.state.loading === false? <PokemonNames pokemon={this.state.data}/> : <p>loading</p>
    
      )
  }
}