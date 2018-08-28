import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_WEATHER:
        console.log(action.payload.data);
        // We don't ever manipulate state directly : state.push(...)
        // We need to return a new fresh array with all the data.
        // 'concat' does not change the existing array but creates a new array with all data.
        //return state.concat([action.payload.data]);
        return [action.payload.data, ...state]; // New way.
    }
    return state;
}