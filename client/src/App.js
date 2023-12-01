import './App.css';
import { Login } from './component/Login';
import Register from './component/Register';
import { Welcome } from './component/Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskComponent from './todo/TaskComponent';
import { TaskProvider } from './context/TaskContext';
function App() {
  return (
    <div>

      <Router>

        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
      <TaskProvider>
        <TaskComponent />
      </TaskProvider>
    </div>
  );
}

export default App;
