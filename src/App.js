import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import ProdactDetails from "./components/prodactDetails";
import ProdactListing from "./components/prodactListing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={ProdactListing}></Route>
          <Route
            exact
            path="/prodact/:prodactId"
            component={ProdactDetails}
          ></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
