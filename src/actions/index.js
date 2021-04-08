export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text
  })

export const setVisibilityFilter = (filter) => ({
   type: 'SET_VISIBILITY_FILTER',
   filter
})