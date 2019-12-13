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
        default:
            return state;
    }
}

export default reducer;