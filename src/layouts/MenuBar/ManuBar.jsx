import './menuBar.css'
import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Grow, colors } from '@mui/material';
import { Slide } from '@mui/material';


function ManuBar() {
  const [showDrop, setShowDrop] = useState(false)
  const [showMobile, setShowmobile] = useState(false)

  const handleSearch = (e)=>{
    e.preventDefault()

  }

  const showProfileMenu=()=>{    
    setShowDrop(!showDrop)
    
  }

  const mobile_titlebar =()=>{
    setShowmobile(!showMobile)
  }
  return (
    <div className="MenuBar">
     
     

      {/* search bar */}
      <form onSubmit={handleSearch}>
        <div className='searchinpu'>
          <input type="text" />
        </div>
        <button>Search</button>
      </form>

      <div className="menuLogout">
        <div className="hamburger">
          <DehazeIcon onClick={mobile_titlebar} />         

          {showMobile && <Slide direction="right" in={mobile_titlebar}  {...(mobile_titlebar? { timeout: 500 } : {})}> 
              <div className="mobile_title_bar">
                  <List className='mobileflexcontrolMenu'>
                    <ListItem>
                      <Link style={{textDecoration:"none" }}  className='profiled_drop' to="/"> <small>Home </small> </Link>
                    </ListItem>
                    <ListItem>
                      <Link style={{textDecoration:"none" }}  className='profiled_drop' to="/"> <small>PC & Tablet</small> </Link>
                    </ListItem>
                    <ListItem>
                      <Link style={{textDecoration:"none" }}  className='profiled_drop' to="/"> <small>Phones</small> </Link>
                    </ListItem>
                    <ListItem>
                      <Link  style={{textDecoration:"none" }} className='profiled_drop' to="/"> <small>About</small> </Link>
                    </ListItem>
                    <ListItem>
                      <Link style={{textDecoration:"none" }}  className='profiled_drop' to="/"><small>Add to Cart </small> </Link>
                    </ListItem>
                    <ListItem>
                      <Link style={{textDecoration:"none" }}  className='profiled_drop' to="/"> <small> My profile</small></Link>
                    </ListItem>
                    <ListItem>
                      <Link style={{textDecoration:"none" }} className='profiled_drop'  to="/"><small> Signout</small></Link>
                    </ListItem>
                  </List>
              </div>
              </Slide>}
          </div>
        
        

        <div className="logout_profil_container">
          <div className="icons_log_prof" style={{cursor:"pointer"}}>
            <div>
            {/* absolut circle of cart */}
            <div className="circleof_cart"><small>2</small></div>
            <AddShoppingCartIcon fontSize="small" sx={{ fontSize: 25 }}/>
            </div>
            <small>Add to Cart</small>
          </div>

          <div onClick={showProfileMenu} className="icons_log_prof" style={{cursor:"pointer"}}>       
            <PersonIcon sx={{fontSize: 25}}/>
            <small>Profile</small>

             {/* drop down of profile */}
              {showDrop && <Grow in={showProfileMenu}>
                <div className="profileDrop">
                  <List>
                    <ListItem>
                      <Link to="/" style={{textDecoration:"none"}} className="profiled_drop"><small>Edit Profile</small></Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/" style={{textDecoration:"none"}} className="profiled_drop"><small>My Cart</small></Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/" style={{textDecoration:"none"}} className="profiled_drop"><small>Account Setting</small></Link>
                    </ListItem>
                    <ListItem>
                      <Link to="/" style={{textDecoration:"none"}} className="profiled_drop"><small>Signout</small></Link>
                    </ListItem>
                  </List>
                </div></Grow>}
          </div>

          <div className="icons_log_prof" style={{cursor:"pointer"}}>
            <LogoutIcon sx={{fontSize: 20}}/>
            <small>LogOut</small>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ManuBar