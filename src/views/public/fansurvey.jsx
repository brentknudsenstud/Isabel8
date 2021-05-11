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
    label: '2 to 4 months ago',
    value: '2-4 months'
  },
  {
    label: '5 to 7 months ago',
    value: '5-7 months'
  },
  {
    label: '8 to 12 months ago',
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

const ownedMerchandiseOptions = [
  {
    label: 'An awesome T-shirt',
    value: 'shirt'
  },
  {
    label: 'A CD',
    value: 'CD'
  },
  {
    label: 'A keychain',
    value: 'keychain'
  },
  {
    label: 'A set of 3 golfballs',
    value: '3 golfballs'
  },
  {
    label: 'An autographed band members photo',
    value: 'autographed photo'
  },
  {
    label: 'A brilliant snow globe',
    value: 'snow globe'
  },
  {
    label: 'All of the above',
    value: 'all'
  },
  {
    label: 'Some of the above',
    value: 'some'
  },
  {
    label: "None of the above, but I'll buy something soon",
    value: 'none, but buying soon'
  }
]

const favoriteBandMemberOptions = [
  {
    label: 'Bassist and founder Jordan Burke',
    value: 'Jordan'
  },
  {
    label: "Keyboardist and Jordan Burke's best friend Saya Mento",
    value: 'Saya'
  },
  {
    label: "Frontman and Saya's high school classmate Rocky Whiteside",
    value: 'Rocky'
  },
  {
    label: 'Drummer Theodore Miner',
    value: 'Theodore'
  },
  {
    label: 'Lead Guitarist Bryce Chawsta',
    value: 'Bryce'
  },
  {
    label: "I love them all the same!",
    value: 'all of them'
  },
  {
    label: "What are their names again?",
    value: 'names again?'
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
    q2: '',
    q3: '',
    q4: ''
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
        
        <Question
          title='What Isabel 8 merchandise do you own?'
          options={ownedMerchandiseOptions}
          name='q3'
          value={this.state.q3}
          onChange={this.handleChange}
        />

        <Question
          title="Who's your favorite Isabel 8 band member?"
          options={favoriteBandMemberOptions}
          name='q4'
          value={this.state.q4}
          onChange={this.handleChange}
        />

      </Form>
    )
  }
}