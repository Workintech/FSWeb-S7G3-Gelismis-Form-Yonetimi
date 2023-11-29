import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  const addUsers = (user) => {
    setUsers([...users, user]);
  }

  return (
    <div className="App">
      {users.map((user) => (
        <p>{user.name}</p>
        ))}

      <Form addUsers = {addUsers} />
    </div>
  );
}

export default App;
