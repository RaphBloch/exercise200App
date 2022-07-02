import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions"
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import React, { useState, useEffect, Fragment } from "react";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './WeddingRow.css';
import Vector from '../../assets/Vector.png';








export const WeddingRow = (props) => 
{

    const wedding = props.wedding;
    const index = props.index;
    const [paid,setPaid]=useState(0);
    const [toPay,setToPay]=useState(0);
    const [percentage,setPercentage]=useState(0);
    



    useEffect(()=> 
    {
         manageMoney(wedding);
    },[])



    /**
     * 
     * @param wedding 
     * The goal of the function is to manage the percentage and the amount that must be paid according to the delay of the wedding
     */
    function manageMoney(wedding)
    {
        if(wedding.status == 'Long Time')
            {
                setToPay(wedding.price);
                setPaid(0);
            }
        else 
        {
            if(wedding.status == 'Middle Time')
            {
                setToPay(Math.round(wedding.price*0.7));
                setPaid(Math.round(wedding.price*0.3));
                setPercentage(30);
            }
            else
            {
                if(wedding.status == 'Short Time')
                {
                    setToPay(Math.round(wedding.price*0.3));
                    setPaid(Math.round(wedding.price*0.7));
                    setPercentage(70);
                }
                else
                {
                        setToPay(0);
                        setPaid(wedding.price);
                        setPercentage(100);
                }
            }
        }
        
        
       

    }


    
    
    return(
        <Fragment>
            <TableRow style={{backgroundColor : '#F8F8F9'}}>
                {/* <TableCell align='center'>
                    <div style={{color : statusColor}}>
                        <BorderColorIcon/>
                    </div>
                </TableCell> */}
                <TableCell align="center" >
                <h3 style={{}}>{wedding.names}</h3>
                </TableCell>
                <TableCell align="center">
                <h3 style={{}}>{wedding.mail}</h3>
                </TableCell>
                <TableCell align="center">
                    <h3 style={{color : '#6E75F5'}}>{wedding.date}</h3>
                </TableCell>
                <TableCell align="center">
                    <h3 style={{}}>{wedding.price}</h3>
                </TableCell>
                <TableCell align="center">
                    <span>
                         <span style={{fontWeight : '600' , fontSize : '14px' , fontFamily : 'Poppins'}} >$<span> {paid}</span></span>
                         <br>
                         </br>
                         <span style={{fontWeight : '600' , fontSize : '11px' , fontFamily : 'Poppins'}} >($<span>{toPay}</span> left)</span>
                    </span>
                   
                </TableCell>
                <TableCell align="center">
                    <h3 style={{}}> {wedding.guests}</h3>
                </TableCell>
                <TableCell align="center">
                    <img src={Vector} ></img>
                    <span style={{fontWeight : '600' , fontSize : '12px' , fontFamily : 'Poppins'}}>
                     <span style={{color : '#41ADFF'}}>$<span>{paid}</span>
                      /</span>
                      <span style={{color : '#6E75F5'}}>$<span>{wedding.price}</span></span><br>
                      </br>
                      <span style={{color : '#576D9B'}}>(<span>{percentage}</span>%)</span>
                   </span>
                </TableCell>
            </TableRow>
            <br></br>
        </Fragment>
    )
    



}