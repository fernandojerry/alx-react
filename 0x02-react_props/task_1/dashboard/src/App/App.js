import React from "react";
import Notifications from "../Notifications/Notifications"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./App.css";
import Login from "../Login/Login";

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;