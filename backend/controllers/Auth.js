import Users from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req,res) =>{
    const user = await Users.findOne({
        where:{
            email: req.body.email
        }
    });
    if(!user) return res.status(400).json({msg:"user tidak dapat ditemukan"});
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({msg:"password yang anda masukan salah"});
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const nama = user.nama;
    const email = user.email;
    const role = user.role;
    res.status(200).json({uuid,nama,email,role});
}

export const me = async(req,res) =>{
    if(!req.session.userId){
        return res.status(401).json({msg:"mohon login ke akun anda"});
    }
    const user = await Users.findOne({
        attributes:['uuid','nama','email','role'],
        where:{
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(400).json({msg:"user tidak dapat ditemukan"});
    res.status(200).json(user);
}

export const Logout = (req,res) =>{
    req.session.destroy((err)=>{
        if (err)return res.status(400).json({msg:"tidak dapat logout"});
        res.status(200).json({msg:"anda telah logout"});
    });
}