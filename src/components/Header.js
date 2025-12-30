import React from "react"; import "./Header.css"; 
import SearchIcon from "@material-ui/icons/Search"; 
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"; import { Link } from "react-router-dom"; import { useStateValue } from "./StateProvider"; import { auth } from "./firebase"; 
 
function Header() { 
const [{ basket, user }, dispatch] = useStateValue(); 
  
const handleAuthenticaton = () => { 
if (user) { 
auth.signOut(); 
} 
} 
 
 
return ( 
<div className="header"> 
<Link to="/"> 
<img className="header logo" 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw2kAgk_uAYOxZp- IQre1JzdMCHtdKx-3oiQ&usqp=CAU"/> 
 
<img className="header Location" 
src="D:\Downloads\Picsart_22-04-26_13-07-49-540.png"/> 
</Link> 
 
 
<div className="header search"> 
<input className="header searchInput" type="text" /> 
<SearchIcon className="header searchIcon" /> 
</div> 
 
 
<div className="header nav"> 
<Link to={!user && '/login'}> 
<div onClick={handleAuthenticaton} className="header option"> 
<span className="header optionLineOne">Hello {!user ? 'Guest' : user.email}</span> 
<span className="header optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span> 
</div> 
</Link> 
 
 
<Link to='/orders'> 
<div className="header option"> 
<span className="header optionLineOne">Returns</span> 
<span className="header optionLineTwo">& Orders</span> </div> 
</Link> 
 
 
 
<div className="header option"> 
<span className="header optionLineOne"></span> 
<span className="header optionLineTwo">offer%</span> 
</div> 
 
 
<Link to="/checkout"> 
<div className="header optionBasket"> 
<ShoppingBasketIcon /> 
<span className="header optionLineTwo header   basketCount"> {basket?.length} 
</span> 
</div> 
</Link> 
</div> 
</div> 
); 
} 
 
 
export default Header
 
