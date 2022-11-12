import React from "react"
import TodosContainer from "./components/containers/TodoContainer";
import TodoFormContainer from "./components/containers/TodoFormContainer";
import FilterOptions from "./components/pure/FilterOptions";

function App() {

  return (
    <div>
        <p>Hola!</p>
        <TodosContainer />
        <TodoFormContainer />
        <FilterOptions />
    </div>

  );
}

export default App;
