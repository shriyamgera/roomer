import express from "express"
const router = express.Router()
import Accommodation from "../model/accommodationModel.js"

// const sampleData = [
//     {
//       name: "Greenfield PG",
//       location: "New Delhi",
//       type: "PG",
//       gender: ["male"],
//       img: "sample.jpg",
//       postDate: new Date()
//     },
//     {
//       name: "Sunshine Hostel",
//       location: "Mumbai",
//       type: "Hostel",
//       gender: ["female"],
//       img: "sample.jpg",
//       postDate: new Date()
//     },
//     {
//       name: "Elite Flats",
//       location: "Bangalore",
//       type: "Flat",
//       gender: ["male", "female"],
//       img: "sample.jpg",
//       postDate: new Date()
//     },
//     {
//       name: "Oceanview PG",
//       location: "Chennai",
//       type: "PG",
//       gender: ["female"],
//       img: "sample.jpg",
//       postDate: new Date()
//     },
//     {
//       name: "Hilltop Hostel",
//       location: "Pune",
//       type: "Hostel",
//       gender: ["male"],
//       img: "sample.jpg",
//       postDate: new Date()
//     }
//   ];
  
  // Insert into MongoDB (assuming you have a Mongoose model `Accommodation`)
  // Example:
  // await Accommodation.insertMany(sampleData);

  
router.get('/', async (req, res)=>{
    try {
        console.log("fdfdf");
        
        const result = await Accommodation.find()
        // await Accommodation.insertMany(sampleData);
        if(!result) res.status(404).json({message:"No Accomodations found"})
            console.log(result);
            
        res.status(200).json(result)     
    } catch (error) {
        res.status(500).json({error:error})
    }
   
})

export default router