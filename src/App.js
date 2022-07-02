import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import { NavigationBar } from './Components/NavBar/NavigationBar';
import {MainPage} from './Components/MainPage';

function App() {

  
  return (
    <div className="App"  >
      <NavigationBar/>
      <div style={{display : 'flex'}}>
      ` <div style={{ maxwidth : '1440px' , margin : '0 auto'}}>
          <div>
            <div>
              <h1 style={{width: '101px', height : '36px', fontFamily : 'Poppins' ,marginLeft : '100px'}}>Weddings</h1>
            </div>
            <MainPage></MainPage>
          </div>
        </div>`
      </div>
      
    </div>
  );
}

export default App;
