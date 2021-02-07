import React, { Component } from 'react';

import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import Footer from './components/Footer'
import GameRow from './components/GameRow'
import CardImages from "./api/CardImages/CardImages.json"
import "./App.css";

class App extends Component {

  // Setting this.state.cardImages to the CardImages json array
  state = {
    cardImages : CardImages,
    selectedCards : [],
    score: 0,
    topScore: 0,
    gameMsg : ''
  }
  
  componentDidMount() {
    // shuffle cards everytime the applicaiton starts
    this.setState( { 
      cardImages : this.shufleArray(this.state.cardImages), 
      gameMsg : "Click an image to begin!" 
    }) 
  }

  // button select a card event
  slectCard = cardId => {
    console.log('CardID',cardId)
    // verify entry to continue the game
    let origArray = this.state.cardImages
    let itmsArr = this.state.selectedCards
    if(itmsArr.indexOf(cardId) !== -1) {
       // Duplicate entry, game over
       console.log('game over')
       itmsArr = []
       this.setState({ 
         score : 0, selectedCards : itmsArr, 
         gameMsg : "Game over, click to start again!" 
       })
    }else {
      // new selection continue the game
      itmsArr.push(cardId)
      let tmpScore = this.state.score + 1
      let tmptopScore = this.state.topScore
      if (tmptopScore < tmpScore ) {
        tmptopScore = tmpScore
        this.setState( { topScore : tmptopScore })
      }
      
      if(origArray.length === itmsArr.length) {
        this.setState( { score : tmpScore, selectedCards : itmsArr, gameMsg : "YOUR WIN!" })  
      }
      else  {
        this.setState( { score : tmpScore, selectedCards : itmsArr, gameMsg : "Good selection!" })  
      }
        
    }
    
    console.log(this.state.selectedCards)
    // Change the state this will force a refresh
    // ref: https://medium.freecodecamp.org/force-refreshing-a-react-child-component-the-easy-way-6cdbb9e6d99c
    // shuffle cards and save
    this.setState( { cardImages : this.shufleArray(this.state.cardImages) })
  }

  // Render to screen 
  render() {

    return (
      <>
        <Header gameMsg={this.state.gameMsg} score={this.state.score} topScore ={this.state.topScore}/>
        <Jumbotron />

        <div className="container">   
          
        <GameRow 
             startCard = {0}
             cardImages = {this.state.cardImages}
             slectCard = {this.slectCard}
        /> 
        <GameRow 
             startCard = {4}
             cardImages = {this.state.cardImages}
             slectCard = {this.slectCard}
        /> 
        <GameRow 
             startCard = {8}
             cardImages = {this.state.cardImages}
             slectCard = {this.slectCard}
        /> 

        </div>
      
        <Footer />
      </>
    )
  }
  
  // General functions ...................................................
  // Shuffle an array
  shufleArray = tgtArray => {
    let ctr = tgtArray.length
    let temp
    let index
    // Reorganize array
    while(ctr > 0) {
      // random index 
      index = Math.floor(Math.random() * ctr)
      ctr --
      temp = tgtArray[ctr]
      tgtArray[ctr] = tgtArray[index]
      tgtArray[index] = temp
    }
    return tgtArray
  }

}

export default App;
