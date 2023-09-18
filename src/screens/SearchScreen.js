import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import useResults from "../hooks/useResults"; // custom hook

import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";

/*
   useEffect( () => { } ) va a correr c/vez q se renderize el componente
   useEffect( () => { }, [ ] ) corre solo con la primera renderizada
   useEffect( () => { }, [ var ] ) corre cada q se actualize la variable en particular
*/

const SearchScreen = () => {
   const [results, errorMessage, searchApi] = useResults(term);
   const [term, setTerm] = useState("");

   const filterResultsByPrice = (price) => {
      return results.filter((el) => el.price === price);
   };

   return (
      // <View style={{ flex: 1 }}>
      <>
         <SearchBar
            term={term}
            // onTermChange={(newTerm) => setTerm(newTerm)}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
         />

         {errorMessage ? <Text>{errorMessage}</Text> : null}

         <ScrollView>
            <ResultsList
               results={filterResultsByPrice("$")}
               title="Cost Effective"
            />

            <ResultsList
               results={filterResultsByPrice("$$")}
               title="Bit Pricier"
            />

            <ResultsList
               results={filterResultsByPrice("$$$")}
               title="Big Spender"
            />
         </ScrollView>
      </>
   );
};

const styles = StyleSheet.create({});

export default SearchScreen;

/*

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SerchScreen = () => {
   return (
      <View>
         <Text>Search Screen</Text>
      </View>
   );
};

const styles = StyleSheet.create({});

export default SerchScreen;

*/
