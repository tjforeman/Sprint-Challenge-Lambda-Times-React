import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
 
const CardDiv= styled.div`
border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;
const Headline = styled.div`
font-size: 25px;
  font-family: Didot, serif;
`;


const Author = styled.div`
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const ImgContainer= styled.div`
padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;

`;

const ImgHolder= styled.img`
width: 40px;
`;

const Spanny= styled.span`
padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  return (
    <CardDiv>
      <Headline>{props.card.headline}</Headline>
      <Author>
        <ImgContainer>
          <ImgHolder src={props.card.img} />
        </ImgContainer>
        <Spanny>By {props.card.author}</Spanny>
      </Author>
    </CardDiv>
  );
};

// Make sure to include PropTypes.
Card.propTypes={
  card:PropTypes.object
}
export default Card;
