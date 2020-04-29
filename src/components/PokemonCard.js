import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
 state = {
   flipped: false 
 }
  
  
  flipPic = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }
  render() {
    const {sprites, name, stats} = this.props.pokemon
    return (
      <Card onClick = {() =>{ this.flipPic()} }>
        <div >
          <div className="image">
            <img  src = {this.state.flipped ? sprites.back:sprites.front}  />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[stats.length - 1].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
