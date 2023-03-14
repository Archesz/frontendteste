import React from 'react';
import './ProgressBar.scss';

function ProgressBar(props){
    return (
        <div className='progress-container'>
            <span className='progress-label'>{props.label}</span>
            <div className="progress-bar">
                <div
                    className="progress-bar__fill"
                    style={{ width: `${props.percentage}%` }}
                >
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
