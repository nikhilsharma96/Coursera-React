import * as ActionTypes from './ActionTypes';

export const feedback = (state = { isLoading: true,
    errMess: null, 
    feedback:[]
}, action) => {
    switch (action.type) {
        case ActionTypes.FEEDBACK_LOADING:
            return {...state, isLoading: true, errMess: null, feedback: []}

        case ActionTypes.FEEDBACK_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        case ActionTypes.ADD_FEEDBACK:
            var FEEDBACK = action.payload;
            return {...state,FEEDBACK:state.FEEDBACK.concat(FEEDBACK)};

        default:
          return state;
      }
};