import React from "react";

class InputField extends React.Component {
  state = {
    input: "",
  };

  inputValue = (event) => {
    this.setState({ input: event.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.input !== "") {
      this.props.onSubmit(this.state.input);
      this.setState({ input: "" });
    }
  };

  render() {
    return (
      <form className="groceries-input" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Wat moet je nog meer meenemen?"
          value={this.state.input}
          className="input-field"
          onChange={this.inputValue}
        ></input>
        <button type="submit" className="submit-btn">
          Voeg toe
        </button>
      </form>
    );
  }
}

export default InputField;
