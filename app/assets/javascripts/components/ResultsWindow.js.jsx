// TODO: Change props from individual Thot attributes to Thot object

class ResultsWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let i = 0;
    return (
      <div className={this.props.isShown ? "" : "hidden"}>
        <div id="results-window" className="dashboard-window">
          {
            this.props.results.map(function(result) {
              i++;
              return (
                <SearchResult result={result} key={i} fetchThot={this.props.fetchThot} />
              );
            }.bind(this))
          }
        </div>
      </div>
    );
  }
}