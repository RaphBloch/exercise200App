import React, { useState, useEffect, Fragment } from "react";
//import { useStore } from "../../../Store";
//import { makeStyles, createStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import ShareIcon from '@mui/icons-material/Share';
import Typography  from "@mui/material/Typography";
import { differenceInDays } from "../utils/TimesFunctions";
// import SelectComponent from "../combobox-serach-by/SearchBy";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";
import { SearchAndFilter  } from "./SearchAndFilter/SearchAndFilter";
import Excel from '../assets/Excel.png';
import { Legend} from "./Legend/Legend";
import { weddings } from "../mocks/weddingsData";
import {WeddingTable} from "./Table/WeddingsTable";
import { GlobalData  } from "./GlobalData/GlobalData";





export const MainPage = (props) => 
{

    
    const [data,setData] = useState(weddings);

    /**
     * @param value  the value to be searched in the table
     * @param option  the option  selected by the client
     * Perform a search in the table of value in a specific option  and display the result in the table
     */
    const onSearch = (value,option) => 
    {

        if(value == '')
            setData(weddings);
        else
        {
            var myData = [...data];
    
            let searchedData = myData.filter((item)=> item[option].includes(value) || item[option].includes(value.toUpperCase()) );
    
            setData(searchedData);
        }
       
    }

   
    /**
     * 
     * @param value the delay to the wedding 
     * The function filters the data according to the status selected by the client  and display the result in the table
     */
    const onStatusFilter = (value) => 
    {
       
        const mydata = [...weddings];
        let filteredData = mydata.filter((item)=> item.status == value);
        setData(filteredData);
    }

    return(
        <Fragment>
            <div style={{display : 'flex'}}>
                <div style={{marginLeft : '100px' , marginRight : '26px'}}>
                    <SearchAndFilter  onSearch={onSearch} onStatusFilter={onStatusFilter} ></SearchAndFilter>
                </div>
                <div style={{display : 'flex' , marginRight : '100px'}}>
                    <GlobalData></GlobalData>
                </div>
            </div>
            <div style={{ display : 'flex'}}>
                <div>
                <Legend></Legend>
                </div>
                <div style={{display : 'flex' , position : 'absolute' , left: '76%',marginRight : 'auto'}}>
                        <div style={{marginTop : '10px'}} >
                        <img src={Excel}  alt='Rien'/>
                        </div>
                        <div style={{}}>
                        <h3 style={{color : 'aqua', margin : '8px'}}>Export</h3>
                       </div>
                    
                </div>
            </div>
           
            <WeddingTable data={data}></WeddingTable>
        </Fragment>
    )
}