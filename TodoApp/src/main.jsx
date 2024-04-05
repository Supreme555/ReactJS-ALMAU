import React from "react";
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import TodoList from "./components/todo-list";

const App = () => {
  const value = '<script>alert ("")</script>';
  // const isLoggedIn = false;
  // const loginBox = <span>Log in to the system</span>;
  // const welcomeBox = <span>Welcome Back</span>;

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
}

// const element = <App />;

ReactDOM.render(<App />,
  document.getElementById('root'));