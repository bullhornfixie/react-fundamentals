import React, { useState, useEffect } from 'react'
import './App.css'

function FetchingDataWithHooks() {
  const [data, setData] = useState(null);
  const login = 'bullhornfixie' // could also be passed as a prop

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if(data) {
  return <div>{JSON.stringify(data)}</div>
  }

  return <div>No User Available</div>;
}

export default FetchingDataWithHooks

// in this example we used useEffect to fetch data 
// why? because we only want to fetch data when the component renders (otherwise data will be continuously fetched)
// then we used a conditional to show data if there is any, if not say 'No User Available'
// using JSON.stringify this method converts a JavaScript object to a JSON string 


