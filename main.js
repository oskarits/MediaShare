'use strict';

const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: './public/uploads' });
app.use(express.static('public'));
app.post('/image',  upload.single('my-image'), (req, res) => {
    console.log(req.files);
    const response = {
        message: 'File Upload Complete',
        file: req.file
    };
    res.send(response);
});

app.listen(3000);
