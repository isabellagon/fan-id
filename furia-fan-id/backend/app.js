const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

const upload = multer({ dest: 'uploads/' });

app.post('/upload-doc', upload.single('document'), async (req, res) => {
    const filePath = req.file.path;

    try {
        const { data: { text } } = await Tesseract.recognize(filePath, 'por');
        fs.unlinkSync(filePath); // remove o arquivo após leitura

        // Simples verificação de presença de nome ou CPF
        const valid = /\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/.test(text) || /nome/i.test(text);

        res.json({ success: true, valid, extractedText: text });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor OCR rodando na porta ${PORT}`);
});
