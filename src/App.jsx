import React from "react";
import { Route, Switch } from 'react-router-dom';
// import Button from '@material-ui/core/Button';
import Home from './Home/Home';
import Blog from './Blog/Blog.jsx';
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';


// import './App.css';

function App() {
  return (
    <>
      <NavBar />
      // temporary fix to push content below navbar, but I need a better way to do this
      <div className="push"></div>
      <div className="wrapper">
          <Switch>
            {/* <Route path="/Resume">
              <Resume />
            </Route> */}
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </div>
      <Footer />
    </>
  );
}


// class App extends React.Component {
//   render() {
//     const { name } = this.props;
//     return (
//       <React.Fragment>
//         <h1>Hello {name}</h1>
//         <Button variant="contained">Material UI connected and working</Button>
//       </React.Fragment>
//     );
//   }
// }

export default App;