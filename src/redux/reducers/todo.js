 export const todo = (state = [] , action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, 
                {
                    taskName: action.taskName,
                    taskDesc: action.task
                }
            ]
        default:
            return state
    }
}

export default todo