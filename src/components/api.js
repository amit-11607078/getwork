import axios from "axios";

const url =  'http://dummy.restapiexample.com/api/v1/employees' ;


export const fetchData = async () => {
    

   
    try {
        const {data}  = await axios.get(url);
        //  console.log({data});
        return  {data} 
        
    } catch (error) {
        console.log(error);
    }
    
}
