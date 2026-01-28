
// import { v2 as cloudinary } from "cloudinary";
// import { config } from "dotenv";
// import { CloudinaryStorage } from "multer-storage-cloudinary";

// config();

// cloudinary.config({
   
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
  
// });

// export const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//      folder: 'properties',
//      format: async (req, file) => 'png',
//      public_id: (req, file) => file.originalname,
//   },
// });
// // console.log("Cloudinary loaded:", {
// //   cloud: process.env.CLOUDINARY_CLOUD_NAME,
// //   key: process.env.CLOUDINARY_API_KEY,
// // });

// export default cloudinary;