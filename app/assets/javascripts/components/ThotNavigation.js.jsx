class ThotNavigation extends React.Component {
  render() {
    return (
        <div className="thot-window-bottom-panel">
          <div className="back-button" onClick={this._onClick.bind(this)}>
            {"<"}
          </div>
        </div>
    );
  }

  _onClick(e) {
    if(this.props.displayedThot.thot.parent_id) {
      this.props.fetchThot(this.props.displayedThot.thot.parent_id);
    }
  }
}