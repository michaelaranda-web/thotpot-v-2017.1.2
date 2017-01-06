// TODO: Change props from individual Thot attributes to Thot object

class ResultsWindow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={this.props.isShown ? "" : "hidden"}>
                <div id="results-window" className="dashboard-window">
                    //map results from server call as components
                    {/*<SearchResult></SearchResult>*/}
                </div>
            </div>
        );
    }
}