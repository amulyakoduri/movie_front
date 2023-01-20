import {Switch, Route } from 'react-router-dom'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
//import PageNotFound from "./components/PageNotFound/PageNotFound";
import MovieDetails from "./MovieDetails/MovieDetails";
import Login from "./Login/Login";
import EditMovie from "./EditMovie/EditMovie";
import Home from "./Home/Home";
// import Home from './pages/Home';

import './App.scss';


function App() {
  return (
    <div className="App">
      <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies/:imdbID" component={MovieDetails} />
            <Route path="/login" component={Login} />
            <Route path="/editMovie/:imdbID" component={EditMovie} />
          </Switch>
        </div>
        <Footer />
    </div>
  );
}

export default App;
