class LiftForm extends React.Component {
  constructor(props) {
    super(props);
    this.coefficents = {
      1:  1.0,
      2:  0.943,
      3:  0.906,
      4:  0.881,
      5:  0.851,
      6:  0.831,
      7:  0.807,
      8:  0.786,
      9:  0.765,
      10: 0.744,
    }
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
    this.calculateOnerm = this.calculateOnerm.bind(this);
    this.toggleUnit = this.toggleUnit.bind(this);
  }

  calculateOnerm() {
    console.log(this.state)
    if (this.state.weightlifted && this.state.repsperformed) {
      return this.state.onerm = this.state.weightlifted / this.coefficents[this.state.repsperformed]
    }
    else {
      return 0
    }
  }

  handleValueChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleUnit(e) {
    e.preventDefault()
    this.setState({ ismetric: !this.state.ismetric })
  }

  valid() {
    this.state.date && this.state.liftname && this.state.weightlifted
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
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='liftname'
                 name='liftname' value={this.state.liftname} onChange={this.handleValueChange} />
        </div>
        <div className='form-group'>
          <a className='btn btn-primary' onClick={this.toggleUnit}>
            Metric = {this.state.ismetric.toString()}
          </a>
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='weightlifted'
                 name='weightlifted' value={this.state.weightlifted} onChange={this.handleValueChange} />
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='repsperformed'
                 min='1' max='10'
                 name='repsperformed' value={this.state.repsperformed} onChange={this.handleValueChange} />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-primary' disabled={!this.valid}>Create Lift</button>
          <OnermBox onerm={this.calculateOnerm()} />
        </div>
      </form>
    )
  }

}