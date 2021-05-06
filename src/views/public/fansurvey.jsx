import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';

const fanLevelOptions = [
  {
    label: 'I have met them up close and personal, maybe even backstage',
    value: 'Up Close and Personal Fan'
  },
  {
    label: 'I have attended one or more of their concerts',
    value: 'Concert Fan'
  },
  {
    label: 'I have listened to one or more of their albums',
    value: 'Album Fan'
  },
  {
    label: 'I have watched one or more of their music videos',
    value: 'Video Fan'
  },
  {
    label: "I've heard of them",
    value: 'Word of Mount Fan'
  },
  {
    label: 'I just discovered them online',
    value: 'Online Newbie Fan'
  },
  
]

const lastTimeISawThemOptions = [
  {
    label: 'A week ago',
    value: '1 week'
  },
  {
    label: 'A month ago',
    value: '1 month'
  },
  {
    label: 'Two to four months ago',
    value: '2-4 months'
  },
  {
    label: 'Five to seven months ago',
    value: '5-7 months'
  },
  {
    label: 'Eight to twelve months ago',
    value: '8-12 months'
  },
  {
    label: 'More than a year ago',
    value: '1 year'
  },
  {
    label: "I've never seen them, but I'd love to!",
    value: 'Never but would love to!'
  }


]

function Question({ title, options, value, onChange, name }) {
  return (
    <div className="formFieldStyling">
      {title}
      <Form.Field>
        Selected value: <b>{value}</b>
      </Form.Field>
      {options.map(option => (
        <Form.Field key={option.value}>
          <Checkbox
            radio
            label={option.label}
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
        </Form.Field>
      )
      )}
    </div>
  )
}

export default class Survey extends Component {
  state = {
    q1: '',
    q2: ''
  }
  handleChange = (e, { value, name }) => this.setState({ ...this.state, [name]: value })

  render() {
    return (
      <Form>
        <h3>Fan Survey</h3>
        <Question
          title='What kind of Isabel 8 fan are you?'
          options={fanLevelOptions}
          name='q1'
          value={this.state.q1}
          onChange={this.handleChange}
        />

        <Question
          title='When did you last see Isabel 8?'
          options={lastTimeISawThemOptions}
          name='q2'
          value={this.state.q2}
          onChange={this.handleChange}
        />
        <Form.Field>
          <Checkbox
            radio
            label='I have met them up close and personal, maybe even backstage'
            name='q1'
            value='Up Close and Personal Fan'
            checked={this.state.q1 === 'Up Close and Personal Fan'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='I have attended one or more of their concerts'
            name='q1'
            value='Concert Fan'
            checked={this.state.q1 === 'Concert Fan'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='I have listened to one or more of their albums'
            name='q1'
            value='Album Fan'
            checked={this.state.q1 === 'Album Fan'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='I have seen some of their music videos'
            name='q1'
            value='Video Fan'
            checked={this.state.q1 === 'Video Fan'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label="I've heard of them"
            name='q1'
            value='Hearsay Fan'
            checked={this.state.q1 === 'Hearsay Fan'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label="I just discovered them online"
            name='q1'
            value='Online Newbie'
            checked={this.state.q1 === 'Online Newbie'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}