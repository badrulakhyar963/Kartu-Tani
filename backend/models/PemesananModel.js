import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";

const{DataTypes} = Sequelize;

const Pemesanan = db.define('pemesanan',{
    uuid:{
        type:DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        validate:{
            notEmpty: true,
        }
    },
    nama:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true,
            len:[3, 50],
        }
    },
    alamat:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true,
        }
    },
    IdKartuTani:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true,
            len:[10,25],
        }
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true,
        }
    }

},{
    freezeTableName: true
});

Users.hasMany(Pemesanan);
Pemesanan.belongsTo(Users, {foreignKey:'userId'});

export default Pemesanan;