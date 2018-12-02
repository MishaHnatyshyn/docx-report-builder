const express = require('express');
const multer = require('multer');
const fs = require('fs');
const XLSXParser = require('./XLSXParser');

const app = express();

const storage = multer.diskStorage({
  destination: './files',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.use(express.static('dist'));
app.use(express.static('files'));

app.post('/api/xlsx/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  const data = XLSXParser(req.file.path)
  fs.unlink(req.file.path,function(err){
    if(err) return console.log(err);
    console.log('file deleted successfully');
  });
  res.json(data)
})

app.listen(8080, () => console.log('Listening on port 8080!'));