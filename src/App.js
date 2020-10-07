import React, { useState } from "react";
import PermanentDrawerLeft from "./components/Drawer";
// import logo from './logo.svg';
import "./App.css";
import DataTable from "./components/Table";
import Navbar from "./components/Navbar";
import { Divider, Grid } from "@material-ui/core";
import SearchBar from "./components/SearchBar";
import { fetchData } from "./components/api";
import axios from "axios";

class App extends React.Component {
  constructor(props){
    super(props);
  
  
  this.state = {
      data: {},
      employee_name:"",
  };
  }

  async componentDidMount () {
  //  await axios.get('http://dummy.restapiexample.com/api/v1/employees')
  //   .then(function (response) {
  //     // handle success
  //     const {data} = response;

      
  //    const newdata = data.data;
  //     // console.log(newdata);
  //     data && this.setState({ data: newdata });
  //   })

    const fetchedData  = await fetchData();
    this.setState({ data: fetchedData });
    // {data && console.log(data);}
}

handelChange =  (employee_name) => {
  // axios.get('http://dummy.restapiexample.com/api/v1/employees')
  // .then(function (response) {
  //   // handle success
  //   const {data} = response;
    // const newEmp = data.data.employee_name;
    // console.log(newdata);
    const fetchedData  =  fetchData();
    // this.setState({ data: fetchedData });

    const newEmp = fetchedData.filter( (a) => a.employee_name === employee_name  );
    
    this.setState({ data: newEmp[0] });
    this.state.data = newEmp[0];
  
  // this.setState({ data: newEmp, employee_name: employee_name});
  //  console.log(newEmp[0]);
  //  console.log(this.state.data);
// }
// )
;
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
