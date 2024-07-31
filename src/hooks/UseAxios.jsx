// import { useState, useEffect } from "react";
// import axios from "axios";

// const useAxios = (url, options = {}) => {
//     const [data, setData] = useState(null);
//     const [error, setError] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => { // Corrected async function definition
//             try {
//                 const response = await axios(url, options);
//                 setData(response.data);
//                 setError(null);
//             } catch (err) {
//                 setData(null);
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [url, options]);

//     return { data, error, loading }; // Return error instead of options
// };

// export default useAxios;
