import { useState } from "react";
import { useS3Upload } from "next-s3-upload";

export default function UploadPage() {
  let [imageUrl, setImageUrl] = useState();
  let { uploadToS3 } = useS3Upload();
  let [file, setFile] = useState();


  let handleFileChange = async event => {
    setFile(event.target.files[0])
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    let { url } = await uploadToS3(file);
    setImageUrl(url);

  }
  return (
    <div>
    <form action="" method="post" onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      {imageUrl && <img src={imageUrl} />}    
      <button type="submit">submit</button>
    </form>

    </div>
  );
}