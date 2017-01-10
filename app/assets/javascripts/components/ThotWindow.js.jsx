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
          <div className="current-thot">
            <div className="current-thot-title">{this.props.displayedThot.thot.title}</div>
            <div className="current-thot-details">{this.props.displayedThot.thot.details}</div>
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
          <div className="related-thots-header">Responses</div>
          {
            this.props.displayedThot.relatedThots.map(function (relatedThot) {
              i++;
              return (
                  <RelatedThot key={i} thot={relatedThot} fetchThot={this.props.fetchThot} />
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