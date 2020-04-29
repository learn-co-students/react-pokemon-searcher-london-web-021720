import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const POKE_URL = "http://localhost:3000/pokemon"

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: "",
    createdPokemon: {}
  }

  componentDidMount(){
    fetch(POKE_URL)
    .then(res => res.json())
    .then(pokemon => this.setState({
      pokemon: pokemon
    }))
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    }) 
  }

  handleFilter = () => {
    return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
  }

  handleSubmit = (event) => {
    this.setState({
      createdPokemon: {name: event.target.name, hp: event.target.hp, frontUrl: event.target.frontUrl, backUrl: event.target.backUrl}
    }) 
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search onChange={this.handleSearch} />
        <br />
        <PokemonCollection pokemon={this.handleFilter()} />
      </Container>
    )
  }
}

export default PokemonPage
