class OnermBox extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card-block'>
          <h2 className='card-title text-xs-center'>1 RM Estimate</h2>
          <h3 className='card-text  text-xs-center'>{this.props.onerm}</h3>
        </div>
      </div>
    )
  }
}