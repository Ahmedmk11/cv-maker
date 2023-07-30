import React from 'react';
import PropTypes from 'prop-types';

function Progress(props) {
    const { progress } = props;

    return (
        <div id="progress-bar">
            <div id='circle0' className={`circle ${progress === '0' ? 'active' : ''}`}>1</div>
            <div className="line"></div>
            <div id='circle1' className={`circle ${progress === '1' ? 'active' : ''}`}>2</div>
            <div className="line"></div>
            <div id='circle2' className={`circle ${progress === '2' ? 'active' : ''}`}>3</div>
        </div>
    );
}

Progress.propTypes = {
    progress: PropTypes.string,
};

Progress.defaultProps = {
    progress: '0',
};

export default Progress;
