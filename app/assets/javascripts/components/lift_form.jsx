class LiftForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      date: '',
      liftname: '',
      weightlifted: '',
      ismetric: '',
      repsperformed: '',
      onerm: '',
    }
    this.state = JSON.parse(JSON.stringify(this.defaultState)) // Deep copy via JSON

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.valid = this.valid.bind(this);
  }

  handleValueChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  valid() {
    this.state.date && this.state.liftname && this.state.ismetric && this.state.weightlifted
                    && this.state.repsperformed && this.state.onerm
  }

  handleSubmit(e) {
    var that = this
    e.preventDefault()
    $.post('lifts', { lift: this.state }, function( data ) {
      that.props.handleNewLift(data)
      that.setState(JSON.parse(JSON.stringify(that.defaultState)))
    }, "json");
  }

  render() {
    return (
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input type='date' className='form-control' placeholder='date'
                 name='date' value={this.state.date} onChange={this.handleValueChange} />
          <input type='text' className='form-control' placeholder='liftname'
                 name='liftname' value={this.state.liftname} onChange={this.handleValueChange} />
          <input type='boolean' className='form-control' placeholder='ismetric'
                 name='ismetric' value={this.state.ismetric} onChange={this.handleValueChange} />
          <input type='text' className='form-control' placeholder='weightlifted'
                 name='weightlifted' value={this.state.weightlifted} onChange={this.handleValueChange} />
          <input type='text' className='form-control' placeholder='repsperformed'
                 name='repsperformed' value={this.state.repsperformed} onChange={this.handleValueChange} />
          <input type='text' className='form-control' placeholder='onerm'
                 name='onerm' value={this.state.onerm} onChange={this.handleValueChange} />
          <button type='submit' className='btn btn-primary' disabled={!this.valid}>Create Lift</button>


        </div>
      </form>
    )
  }

}