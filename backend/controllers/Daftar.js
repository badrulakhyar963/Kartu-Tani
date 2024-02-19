import Daftar from "../models/DaftarModel.js";
import Users from "../models/UserModel.js";
import { Op } from "sequelize";

export const getDaftar = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Daftar.findAll({
        attributes: ["uuid","nama", "alamat", "NO_HP", "NIK", "NO_KK", "luasLahan"],
        include: [
          {
            model: Users,
            attributes: ["nama", "email"],
          },
        ],
      });
    } else {
      response = await Daftar.findAll({
        attributes: ["uuid","nama", "alamat", "NO_HP", "NIK", "NO_KK", "luasLahan"],
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

// Method mencari pendaftran berdasarkan id
export const getDaftarById = async (req, res) => {
  try {
    const daftar = await Daftar.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!daftar)
      return res.status(404).json({ msg: "data pendaftaran tidak ditemukan" });
    let response;
    if (req.role === "admin") {
      response = await Daftar.findOne({
        attributes: ["uuid", "nama", "alamat", "NO_HP", "NIK", "NO_KK", "luasLahan"],
        where: {
          id: daftar.id,
        },
        include: [
          {
            model: Users,
            attributes: ["nama","email"],
          },
        ],
      });
    } else {
      response = await Daftar.findOne({
        attributes: ["uuid", "nama", "alamat", "NO_HP", "NIK", "NO_KK", "luasLahan"],
        where: {
          [Op.and]: [{ id: daftar.id }, { userId: req.userId }],
        },
        include: [
          {
            model: Users,
            attributes: ["nama","email"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Method membuat pendaftaran
export const createDaftar = async (req, res) => {
  const { nama, alamat, NO_HP, NIK, NO_KK, luasLahan } = req.body;
  try {
    await Daftar.create({
      nama: nama,
      alamat: alamat,
      NO_HP:NO_HP,
      NIK: NIK,
      NO_KK: NO_KK,
      luasLahan: luasLahan,
      userId: req.userId,
    });
    res.status(201).json({ msg: "pendaftaran berhasil dilakukan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// method update pendaftaran
export const updateDaftar = async (req, res) => {
  try {
    const daftar = await Daftar.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!daftar)
      return res.status(404).json({ msg: "data pendaftaran tidak ditemukan" });
    const { nama, alamat, NO_HP, NIK, NO_KK, luasLahan } = req.body;
    if (req.role === "admin") {
      await Daftar.update(
        { nama, alamat, NO_HP, NIK, NO_KK, luasLahan },
        {
          where: {
            id: daftar.id,
          },
        }
      );
    } else {
      if (req.userId !== daftar.userId)
        return res.status(403).json("msg: akses ditolak");
      await Daftar.update(
        { nama, alamat, NO_HP, NIK, NO_KK, luasLahan },
        {
          where: {
            [Op.and]: [{ id: daftar.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "pendaftaran berhasil diperbarui" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//menghapus pendaftaran
export const deleteDaftar = async (req, res) => {
  try {
    const daftar = await Daftar.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!daftar)
      return res.status(404).json({ msg: "data pendaftaran tidak ditemukan" });
    const { nama, alamat, NO_HP, NIK, NO_KK, luasLahan } = req.body;
    if (req.role === "admin") {
      await Daftar.destroy({
        where: {
          id: daftar.id,
        },
      });
    } else {
      if (req.userId !== daftar.userId)
        return res.status(403).json("msg: akses ditolak");
      await Daftar.destroy({
        where: {
          [Op.and]: [{ id: daftar.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "pendaftaran berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
