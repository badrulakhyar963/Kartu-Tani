import React from "react";
import { useSelector } from "react-redux";
import kartu from "../kartu tani.jpg";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div style={{ fontSize:"20px", color:"black", paddingLeft:"1rem", paddingTop:"1.5rem"}}>
      <h1 className="title" >
        Dashboard
      </h1>
      <h2 className="subtitle">
        Selamat Datang{" "}
        <strong style={{ color: "black" }}>{user && user.nama}</strong>
      </h2>
      <div>
        <p>
          Kartu Tani adalah alat yang digunakan untuk melakukan transaksi
          pembelian pupuk bersubsidi.
        </p>
        <div >
        <img src={kartu} alt="logo" style={{width: "500px"}} />
        </div>
        <p>
          Hal yang harus dipersiapkan sebelum pendaftaran kartu tani antara lain
          :
        </p>
        <p>1. Kartu Tanda Penduduk</p>
        <p>2. Kartu keluarga</p>
        <p>3. Data luas lahan</p>
      </div>
    </div>
  );
};

export default Welcome;
