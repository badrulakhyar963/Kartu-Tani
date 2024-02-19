import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Pemesanan from "./pages/Pemesanan";
import AddPemesanan from "./pages/AddPemesanan";
import EditPemesanan from "./pages/EditPemesanan";
import Daftar from "./pages/Daftar";
import AddDaftar from "./pages/ADDDaftar";
import EditDaftar from "./pages/EditDaftar";
import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/add" element={<AddUser />} />
            <Route path="/users/edit/:id" element={<EditUser />} />
            <Route path="/daftar" element={<Daftar />} />
            <Route path="/daftar/add" element={<AddDaftar />} />
            <Route path="/daftar/edit/:id" element={<EditDaftar />} />
            <Route path="/pemesanan" element={<Pemesanan />} />
            <Route path="/pemesanan/add" element={<AddPemesanan />} />
            <Route path="/pemesanan/edit/:id" element={<EditPemesanan />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
