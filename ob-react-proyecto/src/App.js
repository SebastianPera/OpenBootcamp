import TaskListComponent from './components/container/task_list';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import './App.css';


function App() {
  return (
    <div className="App">

      {/* <RegisterFormik/> */}
      <TaskListComponent></TaskListComponent>
        
    </div>
  );
}

export default App;
