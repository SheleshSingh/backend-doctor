import multer from 'multer';
import CustomError from '../utils/customError';
import Path from 'path';
import fs from 'fs';

const uploadDir = 'upload/';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'upload/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = Path.extname(file.originalname);
    cb(null, `${uniqueSuffix}-${file.fieldname}${extension}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new CustomError('Only image files are allowed', 400));
    }
  },
});

export default upload;
