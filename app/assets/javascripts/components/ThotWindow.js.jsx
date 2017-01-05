class ThotWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            thot_title: this.props.thot_title,
            thot_details: this.props.thot_details
        };
    }

    render() {
        return (
            <div>
                <div id="thot-window">
                    <h4>{this.state.thot_title}</h4>
                    <div>{this.state.thot_details}</div>
                </div>
                <p className="test-ajax-button" onClick={this.changeCurrentThot.bind(this)}>
                    <a className="button">Test AJAX call</a>
                </p>
            </div>
        );
    }

    changeCurrentThot() {
        $.ajax({
            type: "GET",
            context: this,
            url: '/api/thots/11', //fetches specific test Thot
            success: function(data) {
                this._onChangeThotSuccess(data);
            },
            error: function(xhr) {
                console.log("damn");
            }
        });
    }

    _onChangeThotSuccess(data) {
        this.setState({
            thot_title: data.title,
            thot_details: data.details
        });
    }
}