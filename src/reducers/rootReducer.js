//when reducer runs for the first time, no state is being passed to it, so we need to create 
//an initial state and pass it as a default if no state is being passed to a reducer

const initState = {
    posts: [
        { id: '1', title: 'title1', body: 'body1'},
        { id: '2', title: 'title2', body: 'body2'},
        { id: '3', title: 'title3', body: 'body3'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer