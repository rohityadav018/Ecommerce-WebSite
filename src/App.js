import React /*, { useState, useEffect }*/ from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./checkout";
import Login from "./Login";
import Accessories from "./Accessories";
import Electronics from "./Electronics";
import Decorhome from "./Decor_home";
import Fitness from "./Fitness";
import Fashion from "./Fashion";
import Bestseller from "./Bestseller";
import Protool from "./Pro_tools";
import StartingPage from "./StartingPage";

// import { useStateValue } from "./StateProvider";
// import { auth } from "./Firebase";

function App() {
  // const [totalPrice, setTotalPrice] = useState(0);
  // const [totalItems, setTotalItems] = useState(0);
  // const [productAdded, setProductAdded] = useState([]);

  // const [{}, dispatch] = useStateValue();

  // useEffect(() => {
  // auth.onAuthStateChanged((authUser) => {
  //   if (authUser) {
  //     // logged in
  //     dispatch({
  //       type: "SET_USER",
  //       user: authUser,
  //     });
  //     } else {
  //       //loged out
  //       dispatch({
  //         type: "SET_USER",
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);

  return (
    <>
      <Router>
        <div className="app">
          <Routes>
            <Route
              exact
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout /*totalPrice={totalPrice} totalItems={totalItems}*/
                  />
                </>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <>
                  <Header />
                  <Login />
                </>
              }
            ></Route>
            <Route
              exact
              path="/Ecommerce-WebSite"
              element={
                <>
                  <StartingPage />
                </>
              }
            />
            <Route
              exact
              path="/home"
              element={
                <>
                  <Header />
                  <Home
                  // setTotalPrice={setTotalPrice}
                  // totalPrice={totalPrice}
                  // totalItems={totalItems}
                  // setTotalItems={setTotalItems}
                  />
                </>
              }
            />
            <Route
              exact
              path="/Accessories"
              element={
                <>
                  <Header />
                  <Accessories />
                </>
              }
            />
            <Route
              exact
              path="/Electronics"
              element={
                <>
                  <Header />
                  <Electronics />
                </>
              }
            />
            <Route
              exact
              path="/Decor_home"
              element={
                <>
                  <Header />
                  <Decorhome />
                </>
              }
            />
            <Route
              exact
              path="/Fitness"
              element={
                <>
                  <Header />
                  <Fitness />
                </>
              }
            />
            <Route
              exact
              path="/Fashion"
              element={
                <>
                  <Header />
                  <Fashion />
                </>
              }
            />
            <Route
              exact
              path="/Bestseller"
              element={
                <>
                  <Header />
                  <Bestseller />
                </>
              }
            />
            <Route
              exact
              path="/Pro_tools"
              element={
                <>
                  <Header />
                  <Protool />
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
