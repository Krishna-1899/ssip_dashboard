import React, { useState, useEffect } from 'react';
// import data from "../assest/data";
function App() {
  const [data, setData] = useState([]);
  // useEffect(() => {
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:4000/api/v1/getTodos');  
          console.log(response);        
          if (response.ok) {
            const result = await response.json();
            console.log(result);
            setData(result.data);
          } else {
            console.error('Failed to fetch data');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
  }, []);
  console.log(data);
  return (
    <div className='bg-schemes'>
        {data.map((item) => (
            <div key={item.id}>
                <h1>{item.name}</h1>
                <p>{item.desc}</p>
                <p>{item.funds}</p>
                <p>{item.beneficiary}</p>
            </div>
            // You can render other data fields as needed
            ))
        }
    </div>
  );
}

export default App;
