import React from "react";
import Navbar from "./components/navbar";
import Cover from "./components/cover";
import Introduction from "./components/introduction";
import Library from "./components/library";
import Footer from "./components/footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Cover />
      <Introduction />
      <Library />
      <Footer />
    </div>
  )
}

export default App;
