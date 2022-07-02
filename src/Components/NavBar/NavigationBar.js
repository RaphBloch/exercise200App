
import './NavigationBar.css';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Spark from '../../assets/Spark.png';

const navBarStyle = {
    backgroundColor: "rgb(34, 43, 54)",
  };

export const NavigationBar = () => 
{


    return(
        <div className="topnav" id="myTopnav" style={{}}>
            
            <div style={{marginLeft : '100px' ,marginTop : '-15px'}}>
                <img src={Spark}></img>
            </div>
         <div class="notification">
            <h3 style={{color: 'black'}}>Weddings</h3>
            <span class="badge">3</span>
         </div>
                    

            <div style={{marginTop : '0px'}}>
                <h3 style={{color : 'red', float : 'right', left : '81%',position : 'absolute' , marginTop : '-10px'}}>LogOut</h3>
                <LogoutIcon className='navbar-icon'></LogoutIcon>
            </div>

         </div>
    )
}

