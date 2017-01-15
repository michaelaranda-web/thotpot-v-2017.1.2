class ThotNavigation extends React.Component {
  render() {
    return (
        <div className="thot-window-bottom-panel">
          <div className="navigation-button back-button"
               onClick={this._onBackButtonClick.bind(this)}>
            {"<"}
          </div>
          <div className="navigation-button add-response-button"
               onClick={this._addResponseButtonClick.bind(this)}>
            {"+"}
          </div>
        </div>
    );
  }

  _onBackButtonClick(e) {
    if(this.props.displayedThot.thot.parent_id) {
      this.props.fetchThot(this.props.displayedThot.thot.parent_id);
    }
  }

  _addResponseButtonClick(e) {
    this.props.onAddingNewThot();
  }
}