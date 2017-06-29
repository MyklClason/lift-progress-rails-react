class Lifts extends React.Component {
  constructor(props) {
    super(props);
    this.lifts = []
    this.state = {
      lifts: props.data
    };
    console.log(props)
  }

  render() {
    return (
      <div className='lifts'>
        <h1 className='title'>Lifts</h1>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Lift Name</th>
              <th>Weight Lifted</th>
              <th>Reps Performed</th>
              <th>1 RM</th>
            </tr>
          </thead>
          <tbody>
            {this.state.lifts.map((lift, i) =>
              <Lift lift={lift}/>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}