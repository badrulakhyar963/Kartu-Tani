import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import urea from "../urea.png";
import NPK from "../NPK.png";

const FormAddPemesanan = () => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [IdKartuTani, setIdKartuTani] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const savePemesanan = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/pemesanan", {
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
    <div>
      <h1 className="title">Pemesanan</h1>
      <h2 className="subtitle">Tambah Pemesanan</h2>
      <div class="row" style={{ display: "flex" }}>
        <div class="column" style={{flex: "50%" ,justifyContent: "center",textAlign:"center",borderStyle:"solid",borderWidth:"3px"}}>
          <h1 style={{ fontWeight:"bold", fontSize:"20px" }}>NPK</h1>
          <img src={NPK} alt="logo" style={{width: "200px"}} />
          <p style={{ textAlign: "center" }}>Pupuk NPK Phonska merupakan salah satu jenis pupuk yang disubsidi oleh pemerintah sehingga harganya lebih murah dan terjangkau oleh petani. Pupuk phonska disebut juga dengan sebutan pupuk majemuk NPK yang terdiri dari beberapa unsur hara makro, yaitu nitrogen (N), phosphor (P), kalium (K) dan sulfur (S)</p>
        </div>
        <div class="column" style={{ flex: "50%",justifyContent: "center",textAlign:"center",borderStyle:"solid",borderWidth:"3px"}}>
          <h1 style={{ fontWeight:"bold", fontSize:"20px" }}>UREA</h1>
          <img src={urea} alt="logo" style={{width: "200px"}} />
          <p style={{ textAlign: "center" }}>Urea merupakan pupuk yang mudah larut dalam air dan sifatnya sangat mudah menghisap air (higroskopis). Unsur nitrogen yang tinggi di dalam Urea sangat bermanfaat bagi tanaman untuk pertumbuhan dan perkembangan. hijau daun yang berlimpah, tanaman akan lebih mudah melakukan fotosintesis.</p>
        </div>
      </div>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={savePemesanan}>
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
                    type="input"
                    value={alamat}
                    className="input"
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Alamat"
                    
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Nomor Id Kartu Tani</label>
                <div className="control">
                  <input
                    type="input"
                    value={IdKartuTani}
                    className="input"
                    onChange={(e) => setIdKartuTani(e.target.value)}
                    placeholder="IdKartuTani"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Pesan
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

export default FormAddPemesanan;
