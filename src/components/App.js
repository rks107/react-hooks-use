import React, {useState, useEffect} from 'react';
import { User } from './';
function App() {

  const [data, setData] = useState([]);
  const [click, setClick] = useState(false);
  
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log("DATA", data[0]);
        setData(data);
      });
  }, []);


  return (
    <div className='App'>
      <p className='heading'>Users From JSONPlaceholder API</p>
      {data.map((user, key) => (
        <div className='container' key={key}>
          <p>{user.name}</p>
          <button onClick={() => setClick(!click)}>Click Here</button>
          {click ? <User user={user} key={key}/> : null}
        </div>
      ))}
    </div>
  );
}

export default App;
