import React, {useState} from 'react';

function App() {

  const [users, fetUsers] = useState('something');

  function fetUsersFromAPI(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => fetUsers(users));
  };

   

  fetUsersFromAPI();

  return (
    <div className="App">
      hi
  <p>{users}</p>
    </div>
  );
}

export default App;
