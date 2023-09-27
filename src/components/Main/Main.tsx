import * as React from "react";
import { connect } from "react-redux";

class Main extends React.Component {
  render() {
    console.log(this.props);
    return <h1>Hi</h1>;
  }
}

export default connect(
  //mapStateToProps
  (state) => ({}),
  //mapDispatchToProps
  (dispatch) => ({})
)(Main);
