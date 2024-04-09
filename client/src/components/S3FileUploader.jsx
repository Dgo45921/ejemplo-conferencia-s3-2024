import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF", "JPG", "SVG"];

export function S3FileUploader() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };

  const uploadPicture = () => {

    if (!file) {
      alert("No se ha seleccionado un archivo");
      return;
    }

    const formData = new FormData();
    formData.append("picture", file[0]);
    fetch("http://localhost:8080/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div className="App">
      <h1>Bienvenido, sube tus fotos aquí </h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `Nombre del archivo: ${file[0].name}` : "No se han subido archivos aún"}</p>
      <Button onClick={uploadPicture}>
        Subir foto
      </Button>
    </div>
  );
}
