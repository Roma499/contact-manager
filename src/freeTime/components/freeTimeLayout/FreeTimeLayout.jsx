import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLayoutConfig, updateDeal } from '../../actions';
import Deal from '../deal/Deal';
import './FreeTimeLayout.css';

const MINUTES_IN_DAY = 60 * 24;

export class FreeTimeLayout extends Component {
  draggedDealId;
  dealPageYCoord;

  constructor(props) {
    super(props);
    this.layoutRef = React.createRef();
    this.setDraggedDeal = this.setDraggedDeal.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }
  render() {
    return (
      <div
        className="free-time-layout"
        ref={this.layoutRef}
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        {this.props.pixelsInMinute &&
          this.props.deals.map(deal => (
            <Deal
              key={deal.id}
              id={deal.id}
              start={deal.start}
              finish={deal.finish}
              setDraggedDeal={this.setDraggedDeal}
            />
          ))}
      </div>
    );
  }
  setDraggedDeal(deal) {
    this.draggedDeal = deal;
  }
  onDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }
  onDrop(e) {
    e.preventDefault();
    this.props.updateDeal(this.draggedDeal);
  }
  componentDidMount() {
    this.props.setLayoutConfig(600 / MINUTES_IN_DAY);
  }
}

function mapStateToProps(state) {
  return {
    pixelsInMinute: state.freeTimeStore.layoutConfig.pixelsInMinute,
    deals: state.freeTimeStore.deals
  };
}
export default connect(
  mapStateToProps,
  { setLayoutConfig, updateDeal }
)(FreeTimeLayout);
