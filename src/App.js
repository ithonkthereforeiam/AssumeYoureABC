import { subscribeToNewRounds } from './api'
import React, { Component } from 'react';
import { Card } from './components/Card/Card';

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
        <Card text={this.state.blackCard.text} isBlack="true" />
      </div>
    );
  }
}



export default App;
