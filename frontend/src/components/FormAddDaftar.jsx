import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import urea from "../urea.png";

const FormAddDaftar = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [NO_HP,setNO_HP] = useState("");
  const [NIK,setNIK] = useState("");
  const [NO_KK,setNO_KK] = useState("");
  const [luasLahan,setluasLahan] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveDaftar = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/daftar", {
        nama: nama,
        alamat: alamat,
        NO_HP:NO_HP,
        NIK:NIK,
        NO_KK:NO_KK,
        luasLahan:luasLahan,
      });
      navigate("/daftar");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Daftar</h1>
      <h2 className="subtitle">Tambah Pendaftaran</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveDaftar}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama Lengkap</label>
                <div className="control">
                  <input
                    type="input"
                    value={nama}
                    className="input"
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama Lengkap"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">No Handphone</label>
                <div className="control">
                  <input
                    type="input"
                    value={NO_HP}
                    className="input"
                    onChange={(e) => setNO_HP(e.target.value)}
                    placeholder="Nomor handphone"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Alamat</label>
                <div className="control">
                  <input
                    type="input"
                    value={alamat}
                    className="input"
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Alamat"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">NIK</label>
                <div className="control">
                  <input
                    type="input"
                    value={NIK}
                    className="input"
                    onChange={(e) => setNIK(e.target.value)}
                    placeholder="NIK"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nomor Kartu Keluarga</label>
                <div className="control">
                  <input
                    type="input"
                    value={NO_KK}
                    className="input"
                    onChange={(e) => setNO_KK(e.target.value)}
                    placeholder="Nomor Kartu Keluarga"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Luas Lahan (m²)</label>
                <div className="control">
                  <input
                    type="input"
                    value={luasLahan}
                    className="input"
                    onChange={(e) => setluasLahan(e.target.value)}
                    placeholder="Luas Lahan"
                  />
                </div>
              </div>
              
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Daftar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddDaftar;
