// const Dustbin = require('../model/dustbin.js');

import { Dustbin } from "../model/dustbin.model.js";


const getDustbin =async (req,res)=>{
  try {
    const dustbins = await Dustbin.find();
    return res.status(200).json(dustbins);
  } catch (error) {
    console.error('Error fetching dustbins:', error);
    return res.status(500).json({ error: 'Error fetching dustbins' });
  }
};


export {
  getDustbin
}

// module.exports.getAllDustbins = async (req, res) => {
//   try {
//     const dustbins = await Dustbin.find({});
//     return res.status(200).json(dustbins);
//   } catch (error) {
//     console.error('Error fetching dustbins:', error);
//     return res.status(500).json({ error: 'Error fetching dustbins' });
//   }
// };

// module.exports.getDustBin = async (req, res)=>{
//   try {
//     const dustbins = await Dustbin.find({});
//     return res.status(200).json(dustbins);
//   } catch (error) {
//     console.error('Error fetching dustbins:', error);
//     return res.status(500).json({ error: 'Error fetching dustbins' });
//   }
// };


// // export {
// //   getDustBin,
// //   getAllDustbins
// // }