import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    image: "front"
  }

  handleClick = () => {
    this.setState({
      image: (this.state.image === "front") ? "back" : "front"
    })
  }

  render() {
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            <img src={ (this.state.image === "front") ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
    <div className="header">{this.props.pokemon.name }</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              { (this.props.pokemon.stats.find(element => element.name === "hp").value)}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
