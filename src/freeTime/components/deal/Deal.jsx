import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { timestampToPixels, msToTime, pixelsToTimestamp } from '../../../utils/timeConverter';
import './Deal.css';

export class Deal extends Component {
  startMouseYCoord;

  constructor(props) {
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onDoubleClick = this.props.onDoubleClick.bind(this);
  }

  render() {
    const { start, finish, pixelsInMinute } = this.props;
    const style = {
      top: timestampToPixels(start, pixelsInMinute),
      height: timestampToPixels(finish - start, pixelsInMinute)
    };
    return (
      <div
        draggable
        className="deal"
        style={style}
        onDragStart={this.onDragStart}
        onDrag={this.onDrag}
        onDragOver={this.onDragOver}
        onDoubleClick={this.onDoubleClick}
      >
        {msToTime(start)} - {msToTime(finish)}
      </div>
    );
  }
  onDragStart(e) {
    this.startMouseYCoord = e.pageY;
    e.dataTransfer.dropEffect = 'move';
  }
  onDrag(e) {
    const timeDelta = pixelsToTimestamp(this.startMouseYCoord - e.pageY, this.props.pixelsInMinute);
    const newStart = this.props.start - timeDelta;
    const newFinish = this.props.finish - timeDelta;
    const newDeal = {
      id: this.props.id,
      start: newStart,
      finish: newFinish
    };
    this.props.setDraggedDeal(newDeal);
  }
  onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'none';
  }
}

function mapStateToProps(state) {
  return {
    pixelsInMinute: state.freeTimeStore.layoutConfig.pixelsInMinute
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onDoubleClick: () => dispatch(push(`/free/${ownProps.id}`))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deal);
