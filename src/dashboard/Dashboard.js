import React from 'react';

import Display from '../display/Display';
import Controls from '../controls/Controls';

class Dashboard extends React.Component {
  state = {
    locked: false,    //unlocked     
    closed: false,    // open 
  };

  render() {
    const { closed, locked } = this.state;

    return (
      <>
        <Display locked={locked} closed={closed} />
        <Controls                  // test to show controls 
          locked={locked}
          closed={closed}
          toggleLocked={this.toggleLocked}
          toggleClosed={this.toggleClosed}
        />
      </>
    );
  }

  toggleLocked = () => {
    this.setState(prev => ({ locked: !prev.locked }));
  };

  toggleClosed = () => {
    this.setState(prev => ({ closed: !prev.closed }));
  };
}

export default Dashboard;