import React, { Component } from 'react';
import './Multiselect.css';

class Multiselect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      selectedOptions: this.props.selectedOptions || [],
    };
  }

  handleSelect = (option) => {
    const { selectedOptions } = this.state;
    const { onSelectionChange } = this.props;
    const isSelected = selectedOptions.find((item) => item.value === option.value);

    const newSelectedOptions = isSelected
      ? selectedOptions.filter((item) => item.value !== option.value)
      : [...selectedOptions, option];

    this.setState({ selectedOptions: newSelectedOptions });
    onSelectionChange(newSelectedOptions);
  };

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  clearSelection = () => {
    this.setState({ selectedOptions: [] });
    this.props.onSelectionChange([]);
  };

  render() {
    const { options, placeholder } = this.props;
    const { search, selectedOptions } = this.state;

    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="multiselect">
        <div className="multiselect__selected">
          {selectedOptions.map((option) => (
            <div key={option.value} className="multiselect__selected-item">
              {option.label}
              <button
                onClick={() => this.handleSelect(option)}
                className="multiselect__remove-button"
              >
                <span className="icon">×</span>
              </button>
            </div>
          ))}
        </div>

        <div className="multiselect__input-container">
          <input
            type="text"
            placeholder={placeholder || 'Search...'}
            value={search}
            onChange={this.handleSearchChange}
            className="multiselect__input"
          />
        </div>

        <div className="multiselect__dropdown">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`multiselect__option ${selectedOptions.some((item) => item.value === option.value) ? 'selected' : ''}`}
                onClick={() => this.handleSelect(option)}
              >
                {option.label}
              </div>
            ))
          ) : (
            <div className="multiselect__no-results">No results found</div>
          )}
        </div>

        <button onClick={this.clearSelection} className="multiselect__clear">
          Clear all
        </button>
      </div>
    );
  }
}

export default Multiselect;