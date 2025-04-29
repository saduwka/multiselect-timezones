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
        console.log("Received timezones:", data); // Логируем полученные данные
        const options = data.map((timezone) => ({
          label: timezone,
          value: timezone,
        }));
        this.setState({ options }, () => {
          console.log("Updated options:", this.state.options); // Логируем обновлённые опции
        });
      })
      .catch((error) => {
        console.error("Error fetching timezones:", error); // Логируем ошибки
      });
  }

  handleSelectionChange = (newSelectedOptions) => {
    this.setState({ selectedOptions: newSelectedOptions }, () => {
      console.log("Updated selected options:", this.state.selectedOptions); // Логируем выбранные опции
    });
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