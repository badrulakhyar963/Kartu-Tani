import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";

const{DataTypes} = Sequelize;

const Daftar = db.define('daftar',{
    uuid:{
        type:DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    nama:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true,
            len:[3, 50]
        }
    },
    alamat:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true,
            len:[3, 250]
        }
    },
    NO_HP:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true,
            len:[8, 15]
        }
    },
    NIK:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true,
            len:[16]
        }
    },
    NO_KK:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    },
    luasLahan:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty: true,
        }
    },
    userId:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
});

Users.hasOne(Daftar);
Daftar.belongsTo(Users, {foreignKey:'userId'});

export default Daftar;