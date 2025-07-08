class DownloadController {
    downloadFile(req, res) {
        const filePath = req.params.filePath; // Assuming filePath is passed as a route parameter
        res.download(filePath, (err) => {
            if (err) {
                res.status(500).send({ message: 'File download failed', error: err });
            }
        });
    }
}

module.exports = DownloadController;