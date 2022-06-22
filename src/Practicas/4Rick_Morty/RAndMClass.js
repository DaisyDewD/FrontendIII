import React from 'react';
import { useState, useEffect } from "react";
import Card from './Card.js';

class RAndMClass extends Component {
  constructor() {
      super();
      this.state = {
          data: {},
          id: 1,
      }
  }
  

  request = async () => {
    if(this.state.id > 0) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${this.state.id}`);
        const result = await response.json();
        console.log(result);
        this.setState({data: result});
    }
  }

    componentDidMount() {
    this.request();
    }

    componentDidUpdate(prevProps, prevState) {
    if(prevState.id !== this.state.id) {
      this.request();
    }

    }

  increment = (argument) => {
    if (argument === "prev") {
      setId((prevState) => prevState - 1);
    } else if (argument === "next") {
      setId((prevState) => prevState + 1);
    }
  };

  render() {
    return(
        <div className={this.props.nameClass}>
            <Card name={this.state.data.name} img={this.state.data.image} incrementId={this.incrementId} text="Componente Clase" />
        </div>
    )
}
}

export default RickAndMortyClass;
