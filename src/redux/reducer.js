const counterReducer = (state = {count:0}, action) => {
    console.log(action)
    if(action.type === 'INCREMENT'){
        return {...state, count: state.count + 1} 
    } else if(action.type === 'DECREMENT') {
        return {...state, count: state.count - 1} 
    }
    return state 
}

export default counterReducer;