const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.resolve(__dirname, '..', '..', 'uploads'));
  },

  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.fieldname}.jpg`);
  },
});

module.exports = multer({ storage });
