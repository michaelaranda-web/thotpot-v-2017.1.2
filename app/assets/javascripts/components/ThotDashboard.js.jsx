// TODO Use React.createClass to avoid manually binding this for every function
class ThotDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayResults: false,
      displayedThot: null,
      searchResults: [],
    }
  }

  render() {
    return (
      <div id="thot-dashboard">
        <ThotSearchBar
            onSearch={this.searchThots.bind(this)} />
        <hr />
        <ThotWindow displayedThot={this.state.displayedThot}
                    isShown={!this.state.displayResults}
                    fetchThot={this.fetchThot.bind(this)}
                    updateDisplayedThot={this.updateDisplayedThot.bind(this)} />
        <ResultsWindow
            results={ this.state.searchResults }
            isShown={this.state.displayResults}
            fetchThot={this.fetchThot.bind(this)} />
        <hr />
      </div>
    );
  }

  fetchThot(id) {
    $.ajax({
      type: "GET",
      context: this,
      url: '/api/thots/' + id,
      success: function(data) {
        this._onFetchThotSuccess(data);
      },
      error: function(xhr) {
        console.log("dang");
      }
    });
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

  updateDisplayedThot(thot) {
    this.setState({displayedThot: thot})
  }

  _onSearchSuccess(results) {
    this.setState({displayResults: true, searchResults: results});
  }

  _onFetchThotSuccess(thotData) {
    this.setState({displayedThot: thotData, displayResults: false});
  }
}