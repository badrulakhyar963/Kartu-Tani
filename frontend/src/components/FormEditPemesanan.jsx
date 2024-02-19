import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditPemesanan = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [IdKartuTani,setIdKartuTani] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getPemesananById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/pemesanan/${id}`
        );
        setNama(response.data.nama);
        setAlamat(response.data.alamat);
        setIdKartuTani(response.data.IdKartuTani);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getPemesananById();
  }, [id]);

  const updatePemesanan = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/pemesanan/${id}`, {
        nama: nama,
        alamat: alamat,
        IdKartuTani: IdKartuTani,
      });
      navigate("/pemesanan");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div style={{ paddingLeft:"1rem", paddingTop:"1.5rem"}}>
      <h1 className="title">Edit Pemesanan</h1>
      <h2 className="subtitle">Edit Data Pemesanan</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updatePemesanan}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={nama}
                      onChange={(e) => setNama(e.target.value)}
                    >
                      <option>Pilih pupuk</option>
                      <option value="UREA 1 kg Rp 2.250">UREA 1 kg Rp 2.250</option>
                      <option value="UREA 5 kg Rp 11.250">UREA 5 kg Rp 11.250</option>
                      <option value="UREA 10 kg Rp 22.500">UREA 10 kg Rp 22.500</option>
                      <option value="UREA 50 kg Rp 112.500">UREA 50 kg Rp 112.500</option>
                      <option value="UREA 1 kg Rp 2.300">UREA 1 kg Rp 2.300</option>
                      <option value="UREA 5 kg Rp 11.500">UREA 5 kg Rp 11.500</option>
                      <option value="UREA 10 kg Rp 23.000">UREA 10 kg Rp 23.000</option>
                      <option value="UREA 50 kg Rp 115.000">UREA 50 kg Rp 115.000</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Alamat</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="alamat"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nomor Id Kartu</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={IdKartuTani}
                    onChange={(e) => setIdKartuTani(e.target.value)}
                    placeholder="IdKartuTani"
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
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

export default FormEditPemesanan;
