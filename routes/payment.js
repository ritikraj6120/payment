const express = require('express');
const Router = express.Router();
Router.post('/upload', upload.single('file'), uploadImageVideo, uploadErrorhandler);
Router.get('/files', getFiles);
