import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from '../actions';

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
        case FETCH_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
                error: null
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                smurfs: [],
                isFetching: false,
                error: null
            }
        default:
            return state;
    }
}

export default reducer;