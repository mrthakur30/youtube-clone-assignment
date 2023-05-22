export const  reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { page: state.page < 10 ? state.page + 1 : state.page };
      case 'DECREMENT':
        return { page: state.page > 1 ? state.page - 1 : state.page };
      default:
        return state;
    }
  };
  
