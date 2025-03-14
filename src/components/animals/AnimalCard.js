import React from 'react';
import { connect } from 'react-redux';
import {breedingToWild, endangeredToBreeding, nurse} from '../../actions/animalActions.js'
import { Card, Progress } from 'semantic-ui-react'

const AnimalCard = ({animal, breedingToWild, endangeredToBreeding, nurse}) => {
    console.log(animal.status)
return (

<div className="card">
  <Card>
    <div className="image">
      <img src={animal.img} alt={`${animal.category}`} style={{width: 250, height: 300}}/>
    </div>
    <div className="content">
      <div className="header">{animal.name}</div>
    </div>
    <div className="description">
      Health: {animal.health}
      <Progress percent={animal.health*20}  id="healthBar">
      </Progress>
      Status: {animal.status}
    </div>
    <div className="ui three buttons">
      <div className="ui button" onClick={() => endangeredToBreeding(animal.id)}>Capture</div>
      <div className="ui button" id="nurse" onClick={() => nurse(animal.id)}>Nurse</div>
      <div className="ui button" onClick={() => breedingToWild(animal.id)}>Release</div>
    </div>
  </Card>
</div>
)}

const mapDispatchToProps = dispatch => {
  return {
    breedingToWild: (id) => dispatch(breedingToWild(id)),
    endangeredToBreeding: (id) => dispatch(endangeredToBreeding(id)),
    nurse: (id) => dispatch(nurse(id))
  }
}

export default connect(null, mapDispatchToProps)(AnimalCard)
