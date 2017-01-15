class ThotWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }

  render() {
    return (
      <div className={this.props.isShown ? "" : "hidden"}>
        { this.renderThotWindow() }
        { this.renderRelatedThots() }
      </div>
    );
  }

  renderThotWindow() {
    if(this.props.displayedThot && !this.state.editing) {
      return (
        <div id="thot-window" className="dashboard-window">
          <div className="current-thot">
            <div className="current-thot-title">{this.props.displayedThot.thot.title}</div>
            <div className="current-thot-details">{this.props.displayedThot.thot.details}</div>
          </div>
          <ThotNavigation displayedThot={this.props.displayedThot}
                          fetchThot={this.props.fetchThot}
                          onAddingNewThot={this.onAddingNewThot.bind(this)} />
        </div>
      )
    }
    // yep I know this is redundant/bad, let's just end this
    else {
      if (this.state.editing){
        return (
          <div id="thot-window" className="dashboard-window">
            <input className="new-thot-title" type="text" placeholder="New Thot Title"/>
            <ReactBootstrap.FormControl componentClass="textarea"
                                        className="new-thot-details" placeholder="New Thot Details" />
            <ReactBootstrap.Button type="submit"
                                   className="add-new-thot-button"
                                   onClick={this.addNewResponse.bind(this)}>
              Add Response
            </ReactBootstrap.Button>
          </div>
        )
      }
      else {
        return (
          <div id="thot-window" className="dashboard-window"></div>
        )
      }
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

  addNewResponse() {
    $.ajax({
      data: { parent_id: this.props.displayedThot.thot.id,
              title: $('.new-thot-title').val(),
              details: $('.new-thot-details').val()
      },
      type: "POST",
      context: this,
      url: '/api/thots/create',
      success: function(data) {
        this.setState({editing: false}, this.props.updateDisplayedThot(data));
      },
      error: function(xhr) {
        console.log("dang");
      }
    });
  }

  onAddingNewThot() {
    this.setState({editing: true});
  }
}