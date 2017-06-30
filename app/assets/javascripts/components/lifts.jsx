class Lifts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifts: props.data
    };

    this.addLift = this.addLift.bind(this);
    this.deleteLift = this.deleteLift.bind(this);
  }

  addLift(lift) {
    this.lifts = this.state.lifts.slice();
    this.lifts.push(lift)
    this.setState({lifts: this.lifts})
  }

  deleteLift(lift) {
    this.lifts = this.state.lifts.slice();
    let index = this.lifts.indexOf(lift)
    this.lifts.splice(index, 1)
    this.setState({lifts: this.lifts})
  }

  render() {
    return (
      <div className='lifts'>
        <h1 className='title'>Lifts</h1>

        <LiftForm handleNewLift={this.addLift.bind(this)}/>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Lift Name</th>
              <th>Weight Lifted</th>
              <th>Reps Performed</th>
              <th>1 RM</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lifts.map((lift, i) =>
              <Lift key={lift.id} lift={lift} handleDeleteLift={this.deleteLift} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}