
import Grid from "@mui/material/Grid";
import SearchIcon from '@mui/icons-material/Search';
import Select from 'react-select';
import FilterListIcon from '@mui/icons-material/FilterList';
import TextField from '@mui/material/TextField';
import ListItemText from '@mui/material/ListItemText';
import React,{useState} from 'react';
import Go from './../../assets/GO.png';
import './SearchAndFilter.css';


export const SearchAndFilter = (props) => 
{
    

    const style = {
        control: base => ({
          ...base,
          border: 0,
          // This line disable the blue border
          boxShadow: "none"
        })
      };

    const [searchOption,setSearchOption]= useState('names');
    const [selectOption,setSelectOption] = useState('Long Time');

    const options = [
        { label: "Names", value: 'names' },
        { label: "Date", value: 'date' },
        { label: "EMail", value: 'mail' }
      ];

     

      
    const statusOptions = [
        { label: "Long", value: 'Long Time' },
        { label: "Middle", value: 'Middle Time' },
        { label: "Short", value: 'Short Time' },
        {label : 'Finished', value : 'Finished'}
    ];

   
    const filterHandleChange = (event) => 
    {
        setSelectOption(event.value);
        props.onStatusFilter(event.value);
    }
    const searchHandleChange = (event) => 
    {
        setSearchOption(event.value);
    } 

    


    return(
        <div style={{ display:'flex', flexDirection: 'column' ,borderRadius : '5px',width : '993px' ,height : '142px' , backgroundColor: '#F8F8F9'}}>
            <div style={{flexGrow : '1'}}>
                <div style={{ alignItems : 'center', marginLeft: '33px'}}>
                    <SearchIcon style={{position : 'absolute', left : '20%' , marginTop : '30px', height : '30px'}}></SearchIcon>
                    <h3  style={{position : 'absolute', left : '22%' , marginTop : '35px'}}>Search By :</h3>
                </div>
                
                <div style={{ alignItems : 'center' ,  position : 'absolute', left : '27%' , marginTop : '25px'}}>
                        <Select styles={style} options={options}
                        className="basic-single"
                        classNamePrefix="select"
                        value={options.filter(function(option) {
                            return option.value === searchOption;
                        })}
                        onChange={searchHandleChange}>
                        </Select>
                </div>

                <div style={{marginTop : '15px', position : 'absolute', left : '35%' }} >
                    
                        <TextField style={{width: '276px' , borderRadius: '3px'}}
                            onInput={(e)=> props.onSearch(e.target.value,searchOption)}
                            type="text"
                            id="header-search"
                            name="s" 
                            InputProps={{
                                style: {
                                    height: "30px",
                                    marginTop : '13px'
                                }
                            }}
                        />
                </div>
              
            </div>
            <div style={{flexGrow : '1' , alignItems : 'center'}}>
                <div style={{alignItems : 'center'}}>
                    <FilterListIcon style={{position : 'absolute', left : '20%', color : '#616A82' ,  marginTop: '18px' ,height : '30px'}}>
                    </FilterListIcon>
                    <h3  style={{position : 'absolute', color : '#616A82', left : '22%' , marginTop : '23px'}}>Filter By :</h3>
                </div>
                <div style={{ alignItems : 'center' , height : '10px', width: '120px' , position : 'absolute', left : '27%' , marginTop : '15px'}}>
                  
                  <Select styles ={style} options={statusOptions}
                  className="basic-single"
                  classNamePrefix="select"
                  value={statusOptions.filter(function(option) {
                      return option.value === selectOption;
                  })}
                  onChange={filterHandleChange}>
                  
                  </Select>
                </div>
                <div style={{position : 'absolute', left : '40%' , marginTop : '17px'}}>
                    <h3>Price</h3>
                </div>
                <div style={{position : 'absolute', left : '65%' , marginTop : '25px'}}>
                    <img src={Go}></img>
                </div>
            </div>
        </div>
    )

}

const optionStyle = {
    backgroundColor : 'lightgray',
    color: 'black',
    fontWeight : 'bold',
  }