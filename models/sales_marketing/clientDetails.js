// import {DataTypes} from 'sequelize';
// import sequelize from '../../config/db.config.js';

// const clientDetails=sequelize.define('clientDetails',{
//     clientId:{
//         primarykey:true,
//         type:DataTypes.UUID,
//         allowNull:false,
//         defaultValue:DataTypes.UUIDV4,
//     },
//     companyName:{
//         type:DataTypes.STRING(255),
//         allowNull:false,
//     },
//     emailId:{
//         type:DataTypes.TEXT,
//         allowNull:false,
        
//     },
//     contactNo:{
//         type:DataTypes.NUMBER,
//         allowNull:false,
//     },
//     country:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     state:{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     requirementDetails:{
//         type:DataTypes.STRING,
//         allowNull:false
//     },
//     companyAddress:{
//         type:DataTypes.TEXT,
//         allowNull:false
//     }
// },{
//     updatedAt: false 
// })

// await sequelize.sync({alter:{drop:true}});
// export default clientDetails