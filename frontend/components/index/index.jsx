import React from 'react';
import merge from 'lodash/merge';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destination_address: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("address submitted");
  }

  update(field) {
    return e => {
      const newState = merge({}, this.state);
      newState[field] = e.currentTarget.value;
      this.setState(newState);
    };
  }

  render() {
    return (
      <div>
        <h1>Blueprint</h1>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <h2>Destination Address</h2>
          <input
            id="destination-address"
            type="text"
            onChange={this.update('destination_address')}
            value={this.state.destination_address}
          />
        </form>
      </div>
    );
  }
}
