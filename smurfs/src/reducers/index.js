import { FETCH_SMURF_START } from '../actions';

const initialState = {
    smurfs: [
        {
            name: 'testSmurf',
            age: 23,
            height: 2,
            id: 19245
        },
        {
            name: 'testSmurffette',
            age: 23,
            height: 2,
            id: 54324
        }
    ],
    isFetching: true,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: false,
            }
        default:
            return state;
    }
}

export default reducer;