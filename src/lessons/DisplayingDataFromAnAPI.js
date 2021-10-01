import React, { useState, useEffect } from 'react'
import '../App.css'

function DisplayingDataFromAnAPI() {
  const [data, setData] = useState(null);
  const login = 'bullhornfixie' // could also be passed as a prop

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if(data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>{data.location}</p>
        <img alt={data.login} src={data.avatar_url} />
      </div>
    )
  }

  return <div>No User Available</div>;
}

export default DisplayingDataFromAnAPI




