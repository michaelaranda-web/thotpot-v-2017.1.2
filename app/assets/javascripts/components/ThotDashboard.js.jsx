class ThotDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResults: false,
      results: []
    }
  }

  render() {
    return (
      <div id="thot-dashboard">
        <ThotSearchBar
            onSearch={this.searchThots.bind(this)} />
        <ThotWindow thotTitle='ThotWindow title'
                    thotDetails='ThotWindow details'
                    isShown={!this.state.displayResults} />
        <ResultsWindow
            results={ this.state.results }
            isShown={this.state.displayResults} />
      </div>
    );
  }

  searchThots(keyword) {
    $.ajax({
      data: { keyword: keyword },
      type: "GET",
      context: this,
      url: '/api/search',
      success: function(data) {
        this._onSearchSuccess(data.results);
      },
      error: function(xhr) {
        console.log("dang");
      }
    });
  }

  _onSearchSuccess(results) {
    this.setState({displayResults: true, results: results});
  }
}