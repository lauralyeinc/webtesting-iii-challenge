import React from 'react';

const Display = ({ closed, locked }) => {
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;   // test
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;   // test 

  return (
    <div className="display panel">
      <div className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>  
      <div className={closedClass}>{closed ? 'Closed' : 'Open'}</div>     
    </div>
  );
};


Display.defaultProps = {    // test gate default 
  closed: false,
  locked: false,
};

export default Display;
