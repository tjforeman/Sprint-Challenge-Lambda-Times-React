import React, { Component } from 'react';
import Card from './Card';
import styled from 'styled-components'

const CardsContainer = styled.div`
display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const Cards = props => {
  return (
    <CardsContainer>
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
          {props.cards.map(props =>{
          return (
            <Card card={props}/>
          )
          }
          )}
    </CardsContainer>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;