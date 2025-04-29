import React, { Component } from 'react';
import Multiselect from './components/Multiselect';

class App extends Component {
  state = {
    selectedOptions: [],
    options: [],
  };

  componentDidMount() {
    fetch('https://timeapi.io/api/timezone/availabletimezones')
      .then((response) => response.json())
      .then((data) => {
        const options = data.map((timezone) => ({
          label: timezone,
          value: timezone,
        }));
        this.setState({ options });
      });
  }

  handleSelectionChange = (newSelectedOptions) => {
    this.setState({ selectedOptions: newSelectedOptions });
  };

  render() {
    const { options, selectedOptions } = this.state;

    return (
      <div className="App">
        <h1>Multiselect Component</h1>
        <Multiselect
          options={options}
          selectedOptions={selectedOptions}
          onSelectionChange={this.handleSelectionChange}
          placeholder="Select timezones"
        />
      </div>
    );
  }
}

export default App;