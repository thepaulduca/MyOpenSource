class Event extends React.Component {
  render() {
    return(
      <ul>
        <li>{this.props.data.name}</li>
        <li>{this.props.data.description}</li>
      </ul>
  )
  }
}
