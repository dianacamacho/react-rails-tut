import React, { PropTypes } from 'react';

class TestingComp extends React.Component {
  static propTypes = {
    message: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      longMessage: `Helllloooooo!`
    }
  }

  render() {
    return (
      <div>
        <h3><em>My Message Below</em></h3>
        <p>{this.props.message}</p>
        <p>{this.state.longMessage}</p>
      </div>
    
    );
  }
}

export default TestingComp;
