export const dataReducer=(state=[],action)=>{
    switch(action.type)
    {
        case "FETCH":
            console.log(state);
            console.log(action.payload,action.payload.length)
            return (state.length!==0?[]:action.payload);
        default:
            return state;
    }
}