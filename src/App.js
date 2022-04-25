import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Login from './pages/Login';
// import { BrowserRouter } from 'react-router-dom';

// import Header from './Componentes/Header';
// import Footer from './Componentes/Footer';
import Routes from './Routes';

function App(){
// eslint-disable-next-line
  const [user, setUser] = useState(null);
  //   {
  //   id: 1,
  //   name: "Carlos",
  //   avatar: " "
  // });

  const actionLoginDataGoogle =  async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL

    }
    setUser(newUser);
  }

  if(user === null){
    return(
      <Login onReceiveGoogle={actionLoginDataGoogle}/>
    );
  }

  return (
  
    <BrowserRouter>
      <Header user = {user}/>
      <Routes />
      <Footer />
    </BrowserRouter>

  );
}

export default App;