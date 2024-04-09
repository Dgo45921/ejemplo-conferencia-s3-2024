import { uploadPicture, getAllObjectsUrl } from "./bucket_handler.mjs";
import express from 'express';
import cors from 'cors';
import multer from "multer";

// multer configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
// express configuration
const app = express();
app.use(cors());
const PORT = 8080;

app.use((req, res, next) => {
  console.log(`Request received at ${new Date().toLocaleString()} for route: ${req.url} with method: ${req.method}`);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.get('/get-pictures', (req, res) => {
  getAllObjectsUrl()
    .then(objectsUrl => res.json(objectsUrl))
    .catch(error => res.status(500).json({ error: error.toString() }));
});

app.post('/upload', upload.single("picture"), (req, res) => {
  if (uploadPicture(req.file, req.file.originalname)) {
    res.json({
      message: 'Foto subida correctamente'
    });
  } else {
    res.json({
      message: 'No se pudo subir la foto'
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
