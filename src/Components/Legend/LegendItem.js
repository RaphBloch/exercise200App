

import './LegendItem.css';

export const LegendItem = (props) => 
{

    const {color , delay} = props;

    return(
        <div style={{display : 'flex'}}>
             <div style={{  border : '1px',width: '8px',height : '20px',marginTop : '8px',
                backgroundColor : color}}>
                
             </div>
            <h3>{delay}</h3>
        </div>
    )
}