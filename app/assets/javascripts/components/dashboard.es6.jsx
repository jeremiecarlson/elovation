class Dashboard extends React.Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <div>Text: {this.props.text}</div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  text: React.PropTypes.string
};
