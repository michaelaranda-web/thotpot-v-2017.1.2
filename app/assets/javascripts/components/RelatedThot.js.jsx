class RelatedThot extends React.Component {
  render() {
    return (
        <div className="related-thot result" onClick={this._onClick.bind(this)}>
          <div className="result-title">{this.props.thot.title}</div>
          <div className="result-details">{this.props.thot.details}</div>
          <hr/>
        </div>
    );
  }

  _onClick(e) {
    this.props.fetchThot(this.props.thot.id);
  }
}