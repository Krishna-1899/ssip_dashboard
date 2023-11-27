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
    <div className='bg-schemes border-[1px] rounded-xl mx-auto max-w-[1280px] p-[10px]'>
      <div className='mx-auto max-w-[1280px] m-2 grid grid-cols-4 gap-5 text-xl font-bold px-10'>
        <div>Schemes Name</div>
        <div>Description</div>
        <div>Funds</div>
        <div>Beneficiary</div>
      </div>
        {data.map((item) => (
            <div key={item.id} className='flex-col mx-auto max-w-[1280px]'>
              <div className='p-10 grid grid-cols-4 gap-5 text-2xl border-[2px] border-[black] rounded-xl mb-3'>
                <h1 className='font-bold'>{item.name}</h1>
                <p className=''>{item.desc}</p>
                <p >{item.funds}</p>
                <p>{item.beneficiary}</p>
              </div>
            </div>
            ))
        }
    </div>
  );
}

export default App;
