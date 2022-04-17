import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Componentes/Header';
import Footer from './Componentes/Footer';
import Routes from './Routes';

function App(){

  return (
<BrowserRouter>
<Header />

<Routes/>

<Footer />
</BrowserRouter>



  );
}

export default App;