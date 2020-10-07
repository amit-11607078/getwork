import React, { useState, useEffect } from 'react';
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { fetchData } from "./api";
import { NativeSelect, FormControl } from '@material-ui/core';

export default function SearchBar({onHandelChange}) {

  const [fetchedData, setFetchedData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {

          setFetchedData(await fetchData());
          console.log(fetchedData);
    }

        fetchAPI();
    }, [setFetchedData]);

   

    return (
      <FormControl className="searchbar">
          <NativeSelect defaultValue="" onChange={(e) => onHandelChange(e.target.value)}>
              <option value="">Employee Name</option>
              {fetchedData && fetchedData.map( (option, i) => <option key={i} value={option.employee_name} >{option.employee_name}</option>)}
          </NativeSelect>
      </FormControl>
  )
}
