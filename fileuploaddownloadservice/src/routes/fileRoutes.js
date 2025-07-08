const express = require('express');
const multer = require('multer');
const path = require('path');
const UploadController = require('../controllers/uploadController');
const DownloadController = require('../controllers/downloadController');

const uploadDir = process.env.UPLOAD_DIR || 'uploads';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage });

const router = express.Router();
const uploadController = new UploadController();
const downloadController = new DownloadController();

router.post('/upload', upload.single('file'), uploadController.uploadFile.bind(uploadController));
router.get('/download/:filename', downloadController.downloadFile.bind(downloadController));

module.exports = router;