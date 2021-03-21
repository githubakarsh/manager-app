import logo from './logo.svg';
import './App.css';
import { HeaderComponent } from './components/header/HeaderComponent';
import { SideMenu } from './components/sidebar/sidemenu/SideMenu';
import './main.scss'
import { useState} from 'react';
import { AppRouter } from './router/AppRouter';

function App() {
  const [sideBarOpen, setSideBarOpen] = useState(true);

  const sideBarMenuIconHandle = () => {
    setSideBarOpen(!sideBarOpen);
  }
  
  
  return (
    <div className="App">
      <HeaderComponent appName={"Cafe Nirvana"} sideBarMenuIconHandle={sideBarMenuIconHandle}/>
      <div className="main-container">
     {sideBarOpen && <SideMenu />} 
        <div className="content-container"><AppRouter /></div>
      </div>
    </div>
  );
}

export default App;


{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}