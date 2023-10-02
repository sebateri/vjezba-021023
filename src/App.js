import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [apodData, setApodData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'
        );
        setApodData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!apodData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>NASA Astronomy Picture of the Day</h1>
      <img src={apodData.url} alt={apodData.title} />
      <h2>{apodData.title}</h2>
      <p>{apodData.explanation}</p>
    </div>
  );
}

export default App;
