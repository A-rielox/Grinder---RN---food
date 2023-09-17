import { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
   const [results, setResults] = useState([]);
   const [errorMessage, setErrorMessage] = useState("");

   const searchApi = async (searchTerm) => {
      try {
         // el "/search"  me lo concatena a "baseURL"
         const response = await yelp.get("/search", {
            params: {
               term: searchTerm,
               location: "santiago",
               // location: "san jose",
               limit: 50,
            },
         });

         // response.data me da acceso al body de la respuesta
         setResults(response.data.businesses);
      } catch (error) {
         // console.log(error); //  [AxiosError: Request failed with status code 400]
         setErrorMessage("Something went wrong");
      }
   };

   useEffect(() => {
      searchApi("pizza");
   }, []);

   return [results, errorMessage, searchApi];
};
