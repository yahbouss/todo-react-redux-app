let initialState = [] 
 
 export const todo = (state = initialState , action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log(action)
            return [...state, 
                {
                    taskName: action.payload.taskName,
                    taskDesc: action.payload.taskDesc
                }
            ]
        default:
            return state
    }
}

export default todo