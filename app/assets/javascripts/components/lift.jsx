class Lift extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.lift.date}</td>
        <td>{this.props.lift.liftname}</td>
        <td>{this.props.lift.weightlifted}</td>
        <td>{this.props.lift.repsperformed}</td>
        <td>{this.props.lift.onerm}</td>
      </tr>
    );
  }
}