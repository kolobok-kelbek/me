import React, { useState, useEffect } from 'react';
import './style.css';

export default () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/users/kolobok-kelbek/repos', {
            headers: {  
                "Accept": "application/vnd.github.v3+json"  
            },
        })
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItems(result);
            },
            // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
            // чтобы не перехватывать исключения из ошибок в самих компонентах.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>connection...</div>;
      } else {
        return (
          <ul>
            {items.map((repo, index) => (
              <li key={index}>
                {repo.name} {repo.description}
              </li>
            ))}
          </ul>
        );
      }
}
