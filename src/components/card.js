import React from 'react';
import ProfilePhoto from './ProfilePhoto';
import FullName from './FullName';
import Adresse from './Adresse';
import './card.css';

function Card() {

  return(
    <div className="Card">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Adresse></Adresse>
    </div>
  )
}

export default Card;