import { diskStorage } from "multer";
import { extname } from "path";


export const multerConfig = {
  Storage: diskStorage({
    destination: './uploads/properties',
    filename: (req, file, cb) => {
      const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null, uniqueName + extname(file.originalname));
    },
  }),
};

// export const storage = new CloudinaryStorage({

//    params: async (req, file) => {
//     return {
//       folder: "properties",
//       resource_type: "image",
//       public_id: `${Date.now()}-${file.originalname}`,
//     };
//   },
// });