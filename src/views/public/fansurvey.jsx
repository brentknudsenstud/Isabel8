import React, {Component} from 'react';
import {Form, Checkbox} from 'semantic-ui-react';

export default class Survey extends Component {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
  
    render() {
      return (
        <Form>
            <h3>Fan Survey</h3>
          <Form.Field>
            Selected value: <b>{this.state.value}</b>
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Choose this'
              name='checkboxRadioGroup'
              value='this'
              checked={this.state.value === 'this'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox
              radio
              label='Or that'
              name='checkboxRadioGroup'
              value='that'
              checked={this.state.value === 'that'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
      )
    }
  }