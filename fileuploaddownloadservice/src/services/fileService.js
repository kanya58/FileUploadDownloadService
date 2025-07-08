class FileService {
    constructor(uploadPath) {
        this.uploadPath = uploadPath;
    }

    saveFile(file) {
        const fs = require('fs');
        const path = require('path');

        return new Promise((resolve, reject) => {
            const filePath = path.join(this.uploadPath, file.originalname);
            fs.writeFile(filePath, file.buffer, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(filePath);
            });
        });
    }

    getFile(fileName) {
        const fs = require('fs');
        const path = require('path');

        return new Promise((resolve, reject) => {
            const filePath = path.join(this.uploadPath, fileName);
            fs.access(filePath, fs.constants.F_OK, (err) => {
                if (err) {
                    return reject(new Error('File not found'));
                }
                resolve(filePath);
            });
        });
    }
}

module.exports = FileService;