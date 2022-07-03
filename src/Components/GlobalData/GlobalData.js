import { weddings } from "../../mocks/weddingsData";
import './GlobalData.css';



export const GlobalData = ()=>
{

    let prices = weddings.map((item)=> item.price);
    const money = prices.reduce((a,b)=> a+ b);

    return((
        <div style={{display : 'flex',  backgroundColor : '#F8F8F9',flexDirection : 'column' , width : '221px' , height: '142px' , borderRadius : '5px' }}>
                <div style={{ marginLeft: '10px', marginTop: '10px' , height : '50px' , display : 'flex'}}>
                <span>
                 <span style={{width: '31px', fontWeigth  : '700' , color :'#F7B500' , fontSize : '22px', marginLeft: '-157px'}}>{weddings.length}</span><br/>
                    <span style={{fontSize : '16px' , fontWeight : '600' , 
                    marginLeft: '12px' , color: 'black'}}>
                    Total number of Weddings
                    </span>
                </span>
                </div>
                <div style={{ marginLeft : '23px',  marginTop: '10px'  ,height : '70px' , marginBottom : '19px' , display : 'flex'}}>
                <span>
                    <span style={{fontSize : '22px' , fontWeight : '700' , color: '#44D7B6'}}>$<span>{money}</span></span>
                    <br/>
                    <span style={{ fontSize : '16px' , fontWeight : '600' , color: 'black' , marginLeft : '-3px'}}>Total Price</span>
                </span>
                </div>
        </div>
    ))

}