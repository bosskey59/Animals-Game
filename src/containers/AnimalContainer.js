import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchAnimals} from '../actions/animalActions.js'
import AnimalCard from '../components/animals/AnimalCard'
import { Card } from 'semantic-ui-react'

class AnimalContainer extends Component {
    componentDidMount() {
      this.props.fetchAnimals()
     }
// =================================================showlists=================================================================
     showList(){
       if (this.props.animals.length > 0  && this.props.filter === "breeding"){
         let breeding =  this.props.animals.filter(animal => animal.status === "breeding")
         return (
           <Card.Group itemsPerRow={5}>
             {breeding.map((animal, index) => <AnimalCard key={index} animal={animal}/>)}
           </Card.Group>
         )
       }
       if (this.props.animals.length > 0 && this.props.filter === "all"){
         let all =  this.props.animals
         return (
           <Card.Group itemsPerRow={5}>
             {all.map((animal, index) => <AnimalCard key={index} animal={animal}/>)}
           </Card.Group>
         )
       }
       if (this.props.animals.length > 0 && this.props.filter === "endangered"){
         let endangered = this.props.animals.filter(animal => animal.status === "endangered")
         return (
           <Card.Group itemsPerRow={5}>
             {endangered.map((animal, index) => <AnimalCard key={index} animal={animal}/>)}
           </Card.Group>
         )
       }
        if (this.props.animals.length > 0  && this.props.filter === "wild"){
          let wild =  this.props.animals.filter(animal => animal.status === "wild")
          return (
            <Card.Group itemsPerRow={5}>
              {wild.map((animal, index) => <AnimalCard key={index} animal={animal}/>)}
            </Card.Group>
          )
        }
     }

  render() {
    console.log(this.props.animals)
    return (
        <div>
          {this.showList()}
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      animals: state.animals
    };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAnimals: () => dispatch(fetchAnimals()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalContainer)
