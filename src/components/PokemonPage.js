import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const API = "http://localhost:3000/pokemon"
class PokemonPage extends React.Component {
state = {
  pokemons: [],
  backup: [],
  pokemon: {
    name:"",
    stats:[{name:""}],
    sprites:{front:"",back: ""}

  }
}

getPokemons = () => {
  fetch(API)
  .then(resp => resp.json())
  .then(pokemons => this.setState({
    pokemons: pokemons,
    backup: pokemons 
  }))
}

componentDidMount() {
  this.getPokemons()
}

compareStrings =(value,pokemon) => {
  let switchy = false 
  for (let i = 0; i < value.length; i++) {
   if ( value[i] === pokemon.name[i]) {
    switchy = true  
   } 
   else {
    i = value.length;
    switchy = false 
   }
   console.log(i)
  }

  return switchy
}

search = (value) => {
  const pokemons = this.state.pokemons.filter(pokemon => this.compareStrings(value, pokemon) )
  console.log(value)
  if (value === "" || pokemons.length === 0 ){
   this.setState({
    pokemons: this.state.backup
   })
    
  }
  else {
    console.log("what")
    this.setState({
      pokemons: pokemons
    })
  }
  
}


handleChange = ({name, value}) => {
if (name === "name"){
  this.setState({
    pokemon: {...this.state.pokemon ,[name]: value  }
  })
}
else if (name === "hp" ) {
  this.setState({
    pokemon: {...this.state.pokemon ,stats:[{name:value}]  }
  })
}
else if (name === "frontUrl") {
  this.setState({
    pokemon: {...this.state.pokemon ,sprites:{...this.state.pokemon.sprites, front: value}  }
  })
}
else {
  this.setState({
    pokemon: {...this.state.pokemon ,sprites:{...this.state.pokemon.sprites, back: value}  }
  })
}
}

onSubmit = () => {
  fetch(API, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      "Accept": "application/json"
    },
    body: JSON.stringify({
      ...this.state.pokemon
    }
    )
  })
  .then(resp => resp.json())
  .then(data => this.setState({
    pokemons: [...this.state.pokemons,data ]
  }) )
}



render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit = {e => this.onSubmit()}  handleChange= {e => this.handleChange(e.target)}/>
        <br />
        <Search onChange={(event) => this.search(event.target.value)} />
        <br />
        <PokemonCollection pokemons = {this.state.pokemons} />
      </Container>
    )
  }
}

export default PokemonPage
