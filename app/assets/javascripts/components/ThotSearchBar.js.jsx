class ThotSearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ReactBootstrap.FormGroup>
                    <ReactBootstrap.FormControl
                        id="thot-search-bar"
                        type="text"
                        placeholder="Search" />
                </ReactBootstrap.FormGroup>
                <ReactBootstrap.Button type="submit"
                                       onClick={this.props.onSearch}>
                    Submit
                </ReactBootstrap.Button>
            </div>
        );
    }
}

