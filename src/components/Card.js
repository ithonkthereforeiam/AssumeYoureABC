import React from 'react'

function Card(props) {
  console.log(props)
  return (
    <div className="card">
      {props.text}
    </div>
  );
}

export { Card }