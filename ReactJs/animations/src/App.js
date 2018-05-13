import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup'

import './App.css';
import Card from './Card'
import Board from './Board'
import FadeAndSlideTransition from './FadeAndSlide'


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      cards: []
    }
    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.removeLastCard = this.removeLastCard.bind(this)
  }

  addCard(){
    const { cards } = this.state
    const id = cards.length + 1
    const newCard = {
      id,
      content: `Card ${id}`
    }
    this.setState({
      cards: cards.concat([newCard])
    })
  }

  removeCard(id){
    const { cards } = this.state
    this.setState({
      cards: cards.filter(card => card.id !== id)
    })
  }

  removeLastCard(){
    const { cards } = this.state
    this.setState({
      cards: cards.slice(0, -1)
    })
  }

  render() {
    const {cards} = this.state;
    return (
      <main className="container">
        <h1>React Transition Demo</h1>
        <button onClick={this.addCard}>Add a card</button>
        <button onClick={this.removeLastCard}>Remove a card</button>
        <TransitionGroup component={Board}>
          {
            cards.map(card => {
              return(
                <FadeAndSlideTransition duration={150} key={card.id}>
                  <li className="board__item">
                    <Card onRemove={() => {
                      this.removeCard(card.id)
                    }}>{card.content}
                    </Card>
                  </li>
                </FadeAndSlideTransition>
              )
            })
          }
        </TransitionGroup>
      </main>
    );
  }
}

export default App;
