import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { S3FileUploader } from "./components/S3FileUploader";
import { GridPictureViewer } from "./components/GridPictureViewer";

import "./App.css";


export default function App() {

  const [showFileUploader, setFileUploader] = useState(true);

  const hideFileUploader = () => {
    setFileUploader(false);
  }
  const funcShowFileUploader = () => {
    setFileUploader(true);
  }



  return (
    <>
      <NavBar hideFileUploader={hideFileUploader} showFileUploader={funcShowFileUploader} />
      {showFileUploader && <S3FileUploader />}
      {!showFileUploader && <GridPictureViewer />}

    </>
  )
}
