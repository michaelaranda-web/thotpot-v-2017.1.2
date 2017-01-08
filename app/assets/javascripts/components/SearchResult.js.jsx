class SearchResult extends React.Component {
  render() {
    return (
      <div className="search-result" onClick={this._onClick.bind(this)}>
        <div className="result-title">Title: {this.props.result.title}</div>
        <div className="result-details">Details: {this.props.result.details}</div>
      </div>
    );
  }

  _onClick(e) {
    this.props.fetchThot(this.props.result.id);
  }
}