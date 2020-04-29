import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange ={this.props.handleChange} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange ={this.props.handleChange} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange ={this.props.handleChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange ={this.props.handleChange} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
