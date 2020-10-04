import React, { useState } from "react";
import PermanentDrawerLeft from "./components/Drawer";
// import logo from './logo.svg';
import "./App.css";
import DataTable from "./components/Table";
import Navbar from "./components/Navbar";
import { Divider, Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import { fetchData } from "./components/api";

class App extends React.Component {
  state = {
      data: {},
      eemployee_name:"",
      
  }

  async componentDidMount () {
    const fetchedData  = await fetchData();
    this.setState({ data: fetchedData });
     // console.log(data);
}

handelChange = async (employee_name) => {
  const fetchedData  = await fetchData(employee_name);
  this.setState({ data: fetchedData, employee_name: employee_name});
}

  render(){

    const {data, employee_name} = this.state;


  return (
    <div className="App">
     
      <Grid >
        <PermanentDrawerLeft />
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item xs={10}  className="grid">
        <Navbar className="navbar" />
        <br/>

        <SearchBar onHandelChange={this.handelChange} />
        <br/>
        <DataTable className="datatable" data={data} employee_name={employee_name} />
      </Grid>
    </div>
  );
}
};

export default App;
