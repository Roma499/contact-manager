const defaultState = {
  day: {
    start: 30600000,
    finish: 80300000
  },
  deals: [
    {
      id: '1',
      start: 30600000,
      finish: 31300000
    },
    {
      id: '2',
      start: 40600000,
      finish: 53300000
    }
  ],
  layoutConfig: {
    pixelsInMinute: null
  }
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case 'SET_LAYOUT_CONFIG': {
      return {
        ...state,
        layoutConfig: {
          pixelsInMinute: action.payload
        }
      };
    }

    case 'UPDATE_DEAL': {
      const deal = action.payload.deal;
      return {
        ...state,
        deals: state.deals.map(item => (item.id === deal.id ? deal : item))
      };
    }
    case 'SAVE_DEAL': {
      const deal = action.payload.deal;
      return {
        ...state,
        deals: [...state.deals, deal]
      };
    }
    default:
      return state;
  }
};
