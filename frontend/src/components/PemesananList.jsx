import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListPemesanan = () => {
  const [pemesanan, setPemesanan] = useState([]);

  useEffect(() => {
    getPemesanan();
  }, []);

  const getPemesanan = async () => {
    const response = await axios.get("http://localhost:5000/pemesanan");
    setPemesanan(response.data);
  };

  const deletePemesanan = async (pemesananId) => {
    await axios.delete(`http://localhost:5000/pemesanan/${pemesananId}`);
    getPemesanan();
  };

  return (
    <div style={{ paddingLeft:"1rem", paddingTop:"1.5rem"}}>
      <h1 className="title">List Pemesanan</h1>
      <h2 className="subtitle">List Pemesanan Pupuk Bersubsidi</h2>
      <Link to="/pemesanan/add" className="button is-primary mb-2">
        Tambah pesanan
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>Alamat</th>
            <th>Nomor Id Kartu Tani</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pemesanan.map((pemesanan, index) => (
            <tr key={pemesanan.uuid}>
              <td>{index + 1}</td>
              <td>{pemesanan.nama}</td>
              <td>{pemesanan.alamat}</td>
              <td>{pemesanan.IdKartuTani}</td>
              <td>{pemesanan.user.nama}</td>
              <td>
                <Link
                  to={`/pemesanan/edit/${pemesanan.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deletePemesanan(pemesanan.uuid)}
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

export default ListPemesanan;
