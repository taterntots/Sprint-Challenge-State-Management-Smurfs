import { 
    FETCH_SMURF_START, 
    FETCH_SMURF_SUCCESS, 
    FETCH_SMURF_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAILURE
 } from '../actions';

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
    isFetching: false,
    isPosting: false,
    error: '',
    newSmurf: {
        name: '',
        age: '',
        height: '',
        id: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                isFetching: true,
                error: null
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
        case ADD_SMURF_START:
            return {
                ...state,
                isPosting: true,
                error: null
            }
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isPosting: false,
                error: null
            }
        case ADD_SMURF_FAILURE:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer;