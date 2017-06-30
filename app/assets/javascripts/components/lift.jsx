class Lift extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault()
    let that = this
    $.ajax({
      method: 'DELETE',
      url: '/lifts/' + that.props.lift.id,
      dataType: 'json',
      cache: false,
      success: function(data) {
        that.props.handleDeleteLift(that.props.lift)
      }})
  }


  render() {
    return (
      <tr>
        <td>{this.props.lift.date}</td>
        <td>{this.props.lift.liftname}</td>
        <td>{this.props.lift.weightlifted}</td>
        <td>{this.props.lift.ismetric.toString()}</td>
        <td>{this.props.lift.repsperformed}</td>
        <td>{this.props.lift.onerm}</td>
        <td>
          <a className='btn btn-danger' onClick={this.handleDelete}>
            Delete
          </a>
        </td>

      </tr>
    );
  }
}