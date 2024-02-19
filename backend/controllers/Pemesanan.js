import Pemesanan from "../models/PemesananModel.js";
import Users from "../models/UserModel.js";
import { Op } from "sequelize";

export const getPemesanan = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Pemesanan.findAll({
        attributes: ["uuid", "nama", "alamat","IdKartuTani"],
        include: [
          {
            model: Users,
            attributes: ["nama", "email"],
          },
        ],
      });
    } else {
      response = await Pemesanan.findAll({
        attributes: ["uuid", "nama", "alamat","IdKartuTani"],
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: Users,
            attributes: ["nama", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getPemesananById = async (req, res) => {
  try {
    const pemesanan = await Pemesanan.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!pemesanan)
      return res.status(404).json({ msg: "data pemesanan tidak ditemukan" });
    let response;
    if (req.role === "admin") {
      response = await Pemesanan.findOne({
        attributes: ["uuid", "nama", "alamat","IdKartuTani"],
        where: {
          id: pemesanan.id,
        },
        include: [
          {
            model: Users,
            attributes: ["nama", "email"],
          },
        ],
      });
    } else {
      response = await Pemesanan.findOne({
        attributes: ["uuid", "nama", "alamat","IdKartuTani"],

        where: {
          [Op.and]: [{ id: pemesanan.id }, { userId: req.userId }],
        },
        include: [
          {
            model: Users,
            attributes: ["nama", "email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createPemesanan = async (req, res) => {
  const { nama, alamat,IdKartuTani } = req.body;
  try {
    await Pemesanan.create({
      nama: nama,
      alamat: alamat,
      IdKartuTani:IdKartuTani,
      userId: req.userId,
    });
    res.status(201).json({ msg: "pemesanan berhasil dilakukan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// mengupdate pemesanan
export const updatePemesanan = async (req, res) => {
  try {
    const pemesanan = await Pemesanan.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!pemesanan)
      return res.status(404).json({ msg: "data pemesanan tidak ditemukan" });
    const { nama, alamat,IdKartuTani } = req.body;
    if (req.role === "admin") {
      await Pemesanan.update(
        { nama, alamat,IdKartuTani },
        {
          where: {
            id: pemesanan.id,
          },
        }
      );
    } else {
      if (req.userId !== pemesanan.userId)
        return res.status(403).json("msg: akses ditolak");
      await Pemesanan.update(
        { nama, alamat,IdKartuTani },
        {
          where: {
            [Op.and]: [{ id: pemesanan.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "pemesanan berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// method menghapus pemesanan 
export const deletePemesanan = async (req, res) => {
  try {
    const pemesanan = await Pemesanan.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!pemesanan)
      return res.status(404).json({ msg: "data pemesanan tidak ditemukan" });
    const { nama, alamat,IdKartuTani } = req.body;
    if (req.role === "admin") {
      await Pemesanan.destroy({
        where: {
          id: pemesanan.id,
        },
      });
    } else {
      if (req.userId !== pemesanan.userId)
        return res.status(403).json("msg: akses ditolak");
      await Pemesanan.destroy({
        where: {
          [Op.and]: [{ id: pemesanan.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "pemesanan berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
