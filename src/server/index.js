const express = require('express');
const multer = require('multer');
const docx4js = require("docx4js");
const bodyParser = require('body-parser');
const fs = require('fs');
const XLSXParser = require('./XLSXParser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 8080

let docxTemplate = null;

docx4js.load('test1.docx').then(docx => {
  docxTemplate = docx;
  app.listen(port, () => console.log(`Listening on port ${port}!`));
});

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
  const data = XLSXParser(req.file.path)
  fs.unlink(req.file.path,function(err){
    if(err) return console.log(err);
    console.log('file deleted successfully');
  });
  res.json(data)
})

app.post('/api/report/build', (req, res) => {
  const fields = req.body;
  console.log(fields)

  for (let i = 0; i < docxTemplate.officeDocument.content("w\\:t").length; i++) {
    const child = docxTemplate.officeDocument.content("w\\:t")[i].children[0];
    for (const val in fields) {
      if (child.data.indexOf(val) > -1) {
        child.data = fields[val]
        console.log(val, child.data, fields[val] )
        break;
      }
    }
  }
  const filename = `${new Date()}-report.docx`;
  docxTemplate.save(`files/${filename}`);
  res.json({ status: 1, filename })
});
