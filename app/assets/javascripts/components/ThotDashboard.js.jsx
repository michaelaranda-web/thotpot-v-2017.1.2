class ThotDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayResults: false
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
                    results={ this.props.results }
                    isShown={this.state.displayResults} />
            </div>
        );
    }

    searchThots() {
        $.ajax({
            type: "GET",
            context: this,
            url: '/api/thots/11', //fetches specific test Thot
            success: function(data) {
                this._onSearchSuccess();
            },
            error: function(xhr) {
                console.log("damn");
            }
        });
    }

    _onSearchSuccess() {
        this.setState({displayResults: true});
        console.log("Success!");
    }
}