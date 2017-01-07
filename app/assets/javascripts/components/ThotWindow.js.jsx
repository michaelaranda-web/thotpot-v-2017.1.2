// TODO: Change props from individual Thot attributes to Thot object

class ThotWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      thotTitle: this.props.thotTitle,
      thotDetails: this.props.thotDetails
    };
  }

  render() {
    return (
      <div className={this.props.isShown ? "" : "hidden"}>
        <div id="thot-window" className="dashboard-window">
          <div>{this.state.thotTitle}</div>
          <div>{this.state.thotDetails}</div>
        </div>
      </div>
    );
  }
}