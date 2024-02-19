import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
//import bg from "../bg.jpg";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
        <Navbar />
        <div className="columns mt-6" style={{ minHeight: "100vh" }}>
          <div className="column is-2" style={{ backgroundColor:"lightgreen" }}>
            <Sidebar />
          </div>
          <div
            className="column has-background-light"
            // style={{
            //   backgroundImage: `url(${bg})`,
            //   backgroundPosition: "center",
            //   backgroundRepeat: "norepeat",
            //   backgroundSize: "cover",
            // }}
          >
            <main>{children}</main>
          </div>
        </div>
    </React.Fragment>
  );
};

export default Layout;
