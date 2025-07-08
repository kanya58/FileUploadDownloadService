class UploadController {
    uploadFile(req, res) {
        if (!req.file) {
            return res.status(400).send({ message: 'No file uploaded.' });
        }
        res.status(200).send({ message: 'File uploaded successfully.', file: req.file });
    }
}

module.exports = UploadController;