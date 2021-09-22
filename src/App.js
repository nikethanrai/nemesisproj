import './App.css';
import Table from './components/table'
import { useEffect, useState } from 'react'

function App() {
  const [users, setUsers] = useState();

  const fetchUsers = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      {users && <Table users={users}></Table>}
    </div>
  );
}

export default App;
