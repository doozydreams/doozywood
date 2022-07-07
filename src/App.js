import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import FuturePage from "./components/watch/FuturePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"


function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/singlepage/:id' component={SinglePage} exact />
          <Route path='/future' component={FuturePage} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
