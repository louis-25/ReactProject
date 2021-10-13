import React from 'react';
import "./ProgressBar.css"

function ProgressBar({percent}) {
  return (
    <div className="progress-bar-boundary">
      <div style={{width: `${percent}%`}}>
        {percent}%
      </div>
    </div>
  );
}

export default ProgressBar;