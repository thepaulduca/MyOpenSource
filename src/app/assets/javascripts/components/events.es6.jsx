class Events extends React.Component {
  constructor(){
    super();
    this.state = {
      eventList: []
    }
  }

  handleSearch(event){
    event.preventDefault();
    $.ajax({
      url: 'welcome/events',
      type: 'get',
      data: $('.eventSearch').serialize()
    }).done(function(response){
      this.setState({
        eventList: response.response
      })
      }.bind(this)).fail(function(){

      })
  }

  render() {
    let events = this.state.eventList

    return(
      <div className="events">
        <h5>Search OS Events </h5>
        <form className="eventSearch" onSubmit={this.handleSearch.bind(this)} action="welcome/events" method="get">
          <input type="text" name="zip" placeholder="zip code"/>
          <input type="submit" value="search"/>
        </form>
           {events.map((event, i) => <Event data = {event} key={i}/>)}
      </div>
    )
  }
}
