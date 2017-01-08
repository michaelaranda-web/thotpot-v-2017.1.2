class ThotWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.isShown ? "" : "hidden"}>
        { this.renderDisplayedThot() }
        { this.renderRelatedThots() }
      </div>
    );
  }

  renderDisplayedThot() {
    if(this.props.displayedThot) {
      return (
        <div id="thot-window" className="dashboard-window">
          <div className="result">
            <div className="result-title">{this.props.displayedThot.thot.title}</div>
            <div>{this.props.displayedThot.thot.details}</div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div id="thot-window" className="dashboard-window"></div>
      );
    }
  }

  renderRelatedThots() {
    if(this.props.displayedThot) {
      let i = 0;
      return (
        <div id="related-thots-window">
          {
            this.props.displayedThot.relatedThots.map(function (relatedThot) {
              i++;
              return (
                  <RelatedThot thot={relatedThot} fetchThot={this.props.fetchThot} />
              );
            }.bind(this))
          }
        </div>
      );
    }
    else {
      return (
          <noscript />
      );
    }
  }
}