import {useState,useEffect} from 'react';
import api from '../api/api';

const useFetchData = (url) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () => {
            try {
              setLoading(true);
      
              const response = await api.get(url);
      
              if (response.status === 200) {
                setData(response.data.results);
                setLoading(false);
              }
      
            } catch (error) {
              throw error;
            }
          };
          fetchData();
    },[url]);
    return [loading, data];

};

export default useFetchData;