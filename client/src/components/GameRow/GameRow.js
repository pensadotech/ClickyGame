import React from 'react';
import Card from '../Card'
import "./GameRow.css";

const GameRow = (props) => {

  // Translate session cards into a local var
  let tmpArry = props.cardImages
  let startPos = props.startCard

  return (
    <div className="row gameRow">
      <div className="col-md-3">
        <Card 
            id={tmpArry[startPos].id}
            key={tmpArry[startPos].id}
            name={tmpArry[startPos].name}
            image={tmpArry[startPos].image}
            slectCard={props.slectCard}
        />
      </div>
      <div className="col-md-3">
        <Card 
            id={tmpArry[startPos + 1].id}
            key={tmpArry[startPos + 1].id}
            name={tmpArry[startPos + 1].name}
            image={tmpArry[startPos + 1].image}
            slectCard={props.slectCard}
        />
      </div>
      <div className="col-md-3">
        <Card 
            id={tmpArry[startPos + 2].id}
            key={tmpArry[startPos + 2].id}
            name={tmpArry[startPos + 2].name}
            image={tmpArry[startPos + 2].image}
            slectCard={props.slectCard}
        />
      </div>
      <div className="col-md-3">
        <Card 
            id={tmpArry[startPos + 3].id}
            key={tmpArry[startPos + 3].id}
            name={tmpArry[startPos + 3].name}
            image={tmpArry[startPos + 3].image}
            slectCard={props.slectCard}
        />
      </div>
    </div>
  )
}
  
export default GameRow;