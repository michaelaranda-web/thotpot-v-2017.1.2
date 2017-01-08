// TODO: Change props from individual Thot attributes to Thot object

class ThotWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.isShown ? "" : "hidden"}>
        <div id="thot-window" className="dashboard-window">
          <div>{this.props.displayedThot.title}</div>
          <div>{this.props.displayedThot.details}</div>
        </div>
        <div id="related-thots-window">
          <div>Hello</div>
        </div>
      </div>
    );
  }
}