
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState({})
 useEffect(() => {
    const postData = async () => {
      const api = 'https://chimpu.xyz/api/post.php';

     let  mobileNumber = '00000001';
      const postData = {
        Post: mobileNumber
      };

      try {
        const response = await axios.post(api, postData);
        setData(JSON.parse(response.config.data))
      } catch (error) {
        console.error('Some bad happened:', error);
      }
    };
    postData();
  }, []);
  return (
   <div className='main'>
   <h1> Dummy Number : {data.Post}</h1>
   </div>
  );
}

export default App;
