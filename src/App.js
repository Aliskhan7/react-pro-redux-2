import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {loadTodos} from "./actions";

function App() {
const todos = useSelector(state => state.todos);
const loading = useSelector(state => state.loading);

const dispatch = useDispatch();

useEffect(() => {
  dispatch(loadTodos())
}, [])

  return (
    <div>
      Список дел:
      {loading ? 'load...' : (
          todos.map(item => {
              return(
                  <div>
                      {item.title}
                  </div>
              )
          })
      )}
    </div>
  );
}

export default App;
