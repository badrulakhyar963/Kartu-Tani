import express from "express";
import { 
    getDaftar,
    getDaftarById,
    createDaftar,
    updateDaftar,
    deleteDaftar
 } from "../controllers/Daftar.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/daftar', verifyUser,getDaftar);
router.get('/daftar/:id', verifyUser,getDaftarById);
router.post('/daftar', verifyUser,createDaftar);
router.patch('/daftar/:id',verifyUser ,updateDaftar);
router.delete('/daftar/:id', verifyUser,deleteDaftar);

export default router;