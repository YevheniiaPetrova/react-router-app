import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import './App.css';
import Contacts from './components/contacts/contacts-main';
import Contact from "./components/contacts/contact";
import Tweets from './components/posts/posts-main';
import Main from "./components/main/main";
import Gallery from "./components/gallery/gallery";

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <nav>
            <Link className="header-link" to="/"> Main </Link>
            <Link className="header-link" to='/tweets'> Tweets </Link>
            <Link className="header-link" to='/gallery'> Gallery </Link>
            <Link className="header-link" to='/contacts'> Contacts </Link>
         </nav>
      </header>
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/tweets' element={<Tweets />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/contacts/:lastName' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
