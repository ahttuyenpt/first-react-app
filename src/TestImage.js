import React, { useEffect, useState } from "react";

function TestImage (props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/photos?_start=20&_end=30")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
        console.log("hieutt")
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <p>{item.title}</p>
              <img alt="img" src={item.url} />
            </li>
          ))}
        </ul> 
        {props.anhTuyen}
        </>
      );
    }
}

export default TestImage;