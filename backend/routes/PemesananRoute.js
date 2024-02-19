import express from "express";
import { 
    getPemesanan,
    getPemesananById,
    createPemesanan,
    updatePemesanan,
    deletePemesanan
 } from "../controllers/Pemesanan.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/pemesanan', verifyUser,getPemesanan);
router.get('/pemesanan/:id', verifyUser,getPemesananById);
router.post('/pemesanan', verifyUser,createPemesanan);
router.patch('/pemesanan/:id', verifyUser,updatePemesanan);
router.delete('/pemesanan/:id', verifyUser,deletePemesanan);

export default router;