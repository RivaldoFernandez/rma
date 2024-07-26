// import { useState, useEffect } from "react";
// import axios from "axios";

// const useAxios = (url, options = {}) => {
//     const [data , setData] = useState(null);
//     const [error , setError] = useState(null);
//     const [loading , setLoading] = useState(true);

//     useEffect(() =>{
//         const fetchData = async() {
//             try {
//                 const response = await axios(url, options);
//                 setData(response.data)
//                 setError(null);

//             } catch (err) {
//                 setData(null);
//                 setError(err);
                
//             } finally{
//                 setLoading(false);

//             }
//         };
//         fetchData();    
//     }, [url, options]);
    
// return {data, options, loading}
// };

// export default useAxios;