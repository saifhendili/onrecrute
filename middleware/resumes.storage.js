const multer = require("multer")
const path = require('path');

const storage = multer.diskStorage({
    destination: function (request, file, callback) {
        callback(null, './client/public/resumes');
    },
    filename: function (request, file, callback) {
        callback(null, "resume" + Date.now() + path.extname(file.originalname));
    }
});

module.exports = multer({storage: storage})