class ThotSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }

  render() {
    return (
      <div>
        <ReactBootstrap.FormGroup>
          <ReactBootstrap.FormControl
              id="thot-search-bar"
              type="text"
              onKeyUp={this._handleKeyUp.bind(this)}
              placeholder="Search" />
        </ReactBootstrap.FormGroup>
        <ReactBootstrap.Button type="submit"
                               onClick={this._onSearchSubmit.bind(this)}>
          Submit
        </ReactBootstrap.Button>
      </div>
    );
  }

  _handleKeyUp(e) {
    if(e.keyCode === 13) {
      this._onSearchSubmit();
    }
    else {
      this.setState({text: e.target.value});
    }
  }

  _onSearchSubmit() {
    this.props.onSearch(this.state.text);
  }
}

