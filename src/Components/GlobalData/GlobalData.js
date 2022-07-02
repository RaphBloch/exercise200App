import { weddings } from "../../Data/weddingsData";




export const GlobalData = ()=>
{

    let prices = weddings.map((item)=> item.price);
    const money = prices.reduce((a,b)=> a+ b);

    return((
        <div style={{display : 'flex',  backgroundColor : '#F8F8F9',flexDirection : 'column' , width : '221px' , height: '142px' , borderRadius : '5px' }}>
                <div style={{ marginLeft: '10px', marginTop: '10px' , height : '50px' , display : 'flex'}}>
                <span>
                 <span style={{width: '31px', fontFamily : 'Poppins' , fontWeigth  : '700' , color :'#F7B500' , fontSize : '22px', marginLeft: '-150px'}}>{weddings.length}</span><br/>
                    <span style={{fontFamily : 'Poppins' , fontSize : '16px' , fontWeight : '600' , 
                    marginLeft: '10px' , color: 'black'}}>
                    Total number of Weddings
                    </span>
                </span>
                    {/* <h5 style={{width: '31px', fontFamily : 'Poppins' , fontWeigth  : '500' , color :'orange' , fontSize : '16px' }}></h5>
                    <h5  style={{width: '120px', fontFamily : 'Poppins' , fontWeigth  : '600' , color :'black', fontSize : '10px'}}></h5> */}
                </div>
                <div style={{ marginLeft : '23px',  marginTop: '10px'  ,height : '70px' , marginBottom : '19px' , display : 'flex'}}>
                <span>
                    <span style={{fontFamily : 'Poppins' , fontSize : '22px' , fontWeight : '700' , color: '#44D7B6'}}>$<span>{money}</span></span>
                    <br/>
                    <span style={{fontFamily : 'Poppins' , fontSize : '16px' , fontWeight : '600' , color: 'black' , marginLeft : '-12px'}}>Total Price</span>
                </span>
                </div>
        </div>
    ))

}