

import './LegendItem.css';

export const LegendItem = (props) => 
{

    const {color , delay} = props;

    return(
        <div style={{display : 'flex'}}>
             <div id='legend' style={{backgroundColor : color}}>
                
             </div>
            <h3>{delay}</h3>
        </div>
    )
}