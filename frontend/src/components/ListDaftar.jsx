import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListDaftar = () => {
  const [daftar, setDaftar] = useState([]);

  useEffect(() => {
    getDaftar();
  }, []);

  const getDaftar = async () => {
    const response = await axios.get("http://localhost:5000/daftar");
    setDaftar(response.data);
  };

  const deletePemesanan = async (daftarId) => {
    await axios.delete(`http://localhost:5000/daftar/${daftarId}`);
    getDaftar();
  };

  return (
    <div style={{ paddingLeft:"1rem", paddingTop:"1.5rem"}}>
      <h1 className="title">List Pendaftaran</h1>
      <h2 className="subtitle">List Pendaftaran Kartu Tani</h2>
      <Link to="/daftar/add" className="button is-primary mb-2">
        Daftar
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Lengkap</th>
            <th>Alamat</th>
            <th>Nomor handphone</th>
            <th>NIK</th>
            <th>KK</th>
            <th>Luas Lahan(m²)</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {daftar.map((daftar, index) => (
            <tr key={daftar.uuid}>
              <td>{index + 1}</td>
              <td>{daftar.nama}</td>
              <td>{daftar.alamat}</td>
              <td>{daftar.NO_HP}</td>
              <td>{daftar.NIK}</td>
              <td>{daftar.NO_KK}</td>
              <td>{daftar.luasLahan}</td>
              <td>{daftar.user.nama}</td>
              <td>
                <Link
                  to={`/daftar/edit/${daftar.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deletePemesanan(daftar.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDaftar;
