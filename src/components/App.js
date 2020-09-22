import React, {useState, useEffect} from 'react';
import { User } from './';
function App() {

  const [data, setData] = useState([]);
  const [currentUser, setUser] = useState([]);


  const handleButtonClick =(e, key) => {
    e.preventDefault();
    const currentUsers = [...currentUser];

    if(!currentUsers[key])
    currentUsers[key] = data[key];
    else
    currentUsers[key] = null;

    setUser(currentUsers);
  }
  
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        const currentUsers = new Array(data.length).fill(null);
        setUser(currentUsers)
      });
  }, []);


  return (
    <div className='App'>
      <p className='heading'>Users From JSONPlaceholder API</p>
      {data.map((user, key) => (
        <div className='container' key={user.id}>
          <div className='app__container'>
            <p className="user__name">{user.name}</p>
            <button
              className='btn'
              onClick={(e) => {
                handleButtonClick(e, key);
              }}>
              Click Here
            </button>
          </div>
          {currentUser[key] ? <User user={currentUser[key]} /> : null}
        </div>
      ))}
    </div>
  );
}

export default App;
