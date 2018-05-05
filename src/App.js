import { subscribeToNewRounds } from './api'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);



    this.state = { "blackCard": {"text":"some question","pick":1}
                 , "czar": null
    };

    subscribeToNewRounds((err,round) => {
      this.setState(
        { "blackCard": round.blackCard
        , "czar": round.czar
        }
      );
    });

  }  

  render() {
    console.log(this.state)
    return (
      <div>
        <Card text={this.state.blackCard.text} />
      </div>
    );
  }
}

function Card(props) {
  console.log(props)
  return (
    <div className="card">
      {props.text}
    </div>
  );
}

export default App;
