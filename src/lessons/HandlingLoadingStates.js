import React, { useState, useEffect } from 'react'
import '../App.css'

function DisplayingDataFromAnAPI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const login = 'bullhornfixie' // could also be passed as a prop

  useEffect(() => {
    if (!login) return; 
    // if there is no login we want to return so jump out of fetch call.
    // if there is a login then do the following:

    setLoading(true)
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false)) // setLoading to false after loaded 
      .catch(setError); // catches JavaScript errors and provides a fall back UI rather than component tree that crashed
  }, [login]); // by passing this dependancy anytime this value changes we want to call useEffect (this currently happens only after render)

  if (loading) return <h1>Loading...</h1>;
  if (!data) return null;

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

// when we make a HTTP request to an API there are three possible states [pending, success, failed]


