import LegendToggleSharpIcon from '@mui/icons-material/LegendToggleSharp';
//import Rectangle from '../../src/assets/Rectangle.png';
export const LegendItem = (props) => 
{

    const {color , delay} = props;

    return(
        <div style={{display : 'flex'}}>
             <div style={{border : '1px', width: '8px' , height : '20px' , marginTop : '8px' , backgroundColor : color}}>
                
             </div>
            <h3 style={{letterSpacing : '0.2px', width : '111px', fontFamily: 'Poppins', fontWeight : '600', fontSize : '18px',  margin: '8px 4px',height: '22px'}}>{delay}</h3>
        </div>
    )
}