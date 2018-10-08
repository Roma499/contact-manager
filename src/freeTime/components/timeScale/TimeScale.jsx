import React from 'react';
import { connect } from 'react-redux';
import { timestampToPixels } from '../../../utils/timeConverter';
import './TimeScale.css';

export function TimeScale({ pixelsInMinute }) {
  const style = {
    height: timestampToPixels(60 * 60 * 1000, pixelsInMinute)
  };
  return (
    <div className="time-scale">
      {[...Array(24).keys()].map(item => (
        <span key={item} className="time-scale-hours" style={style}>
          {item}
        </span>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pixelsInMinute: state.freeTimeStore.layoutConfig.pixelsInMinute
  };
}
export default connect(mapStateToProps)(TimeScale);
