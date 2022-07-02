

import { LegendItem } from "./LegendItem";


export const Legend = () => 
{
    return(<div style={{display : 'flex' , width : '700px' , margin: '0px 100px' }}>
                <div style={{width : '120px'}}>
                    <LegendItem color='#ADADAD' delay='Long Time'></LegendItem>
                </div>
                <div style={{width : '120px' , marginLeft : '50px'}}>
                    <LegendItem color='#32C5FF' delay='Middle Time'></LegendItem>
                </div>
                <div style={{width : '120px' ,marginLeft : '50px'}}>
                    <LegendItem color='#F7B500' delay='Short Time'></LegendItem>
                </div>
                <div style={{width : '120px', marginLeft : '50px'}}>
                    <LegendItem color='#09FB82' delay='Finished'></LegendItem>
                </div>
        </div>)
}