import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut,IoReader } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    
     <div style={{ fontFamily:"Bebas Neue", paddingLeft:"1rem", color:"black"}}>
      <aside className="menu pl-2 has-shadow" >
        <p className="menu" style={{ fontSize:"20px", paddingTop:"0.5rem"}}>General</p>
        <ul className="menu-list">
          <li style={{ fontSize:"25px",}}>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li style={{ fontSize:"25px"}}>
            <NavLink to={"/daftar"}>
              <IoReader /> Pendaftaran
            </NavLink>
          </li>
          <li style={{ fontSize:"25px"}}>
            <NavLink to={"/pemesanan"}>
              <IoPricetag /> Pemesanan
            </NavLink>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu" style={{ fontSize:"20px", paddingTop:"0.5rem"}}>Admin</p>
            <ul className="menu-list">
              <li style={{ fontSize:"25px"}}>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <p className="menu" style={{ fontSize:"20px", paddingTop:"0.5rem"}}>Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white"style={{ fontFamily:"Bebas Neue",fontSize:"20px", backgroundColor:"transparent"}}>
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
      </div>
  );
};

export default Sidebar;
