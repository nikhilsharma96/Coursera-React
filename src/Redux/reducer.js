import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { DISHES } from '../shared/dishes';
import { InitialFeedback } from './forms';

export const initialState={
    dishes:DISHES,
    comments:COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS,
    feedback:InitialFeedback
}

export const Reducer = (state = initialState, action)=>{
    return state;
}