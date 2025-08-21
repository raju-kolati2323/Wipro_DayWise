import './App.css';
import ECommerce from './components/Assignments/ECommerce';
import PostsWithComments from './components/Assignments/PostsWithComments';
import UserManagement from './components/Assignments/UserManagement';
import TodoTracker from './components/Assignments/TodoTracker';


function App() {
  return (
    <div className="App">
      <h1><u> 3 - Daywise Assignments</u></h1>
      <ECommerce />
      <hr />
      <UserManagement />
      <hr /> 
      <PostsWithComments />
      <hr />
      <TodoTracker />

    </div>
  );
}

export default App;
