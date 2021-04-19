export const loadTodos = () =>{
    return (dispatch) => {
        dispatch({
            type: 'start'
        })
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json =>{
                dispatch({
                    type: 'load',
                    payload: json
                })
            })
    }
}



















// export const loadTodos = () => {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(respons => respons.json())
//             .then(json => {
//                 dispatch({
//                     type: 'load',
//                     payload: json
//                     }
//                 )
//             })
//     }
// }