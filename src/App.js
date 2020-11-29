

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
//import  Navbar  from './components/Navbar';
import NavigationBar from './components/NavigationBar'
import Sidebar from './components/Sidebar';

import Routes from './components/Routes';
import LoginForm from './components/LoginForm';

function App() {
  const adminUser = {
    email : "admin@admin.com",
    password: "admin123"
  }
  const [user, setUser] = useState ({email: ""});
  const [error, setError] = useState("");
  

  useEffect(() => {
    if((localStorage.getItem("email"))) {
      setUser({email: localStorage.getItem("email")});
    }
  }, []);

  
  const loginFunc = details => {

    if (details.email == adminUser.email && details.password == adminUser.password) {
  
      setUser ({
        email: details.email
      }
      )
      localStorage.setItem("email", user.email);
    } else {
      console.log("details do not match!");
      setError("details do not match!");
    }
    
  }
  
const handleLogout = () => {
  setUser({email: ""});
  localStorage.clear();
};
  return (
    <Router>
    <div>
    {((localStorage.getItem("email") === "admin@admin.com")) ?      
       (
         <div className="container-fluid" style = {{padding:0}} >       
           <NavigationBar handleLogout={handleLogout} />
           <Sidebar />
           <Routes />
         </div>
       )
       :(
         <LoginForm loginFunc={loginFunc} error={error}/>
       )
       }
     </div>
     
  </Router>
  // <Router>
  //     <div className="container-fluid" style = {{padding:0}} >       
  //      <NavigationBar />
  //      <Sidebar />
  //      <Routes />
  //     </div>
  // </Router>

    
  );
}

export default App;
