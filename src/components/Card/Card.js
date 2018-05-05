import React from 'react'
import classNames from 'classnames'
import './Card.css'

function Card(props) {
  console.log(props)
  let classes=classNames( "card", { "black" : props.isBlack })
  return (
    <div className={classes}>
      <p>{props.text}</p>
    </div>
  );
}

export { Card }