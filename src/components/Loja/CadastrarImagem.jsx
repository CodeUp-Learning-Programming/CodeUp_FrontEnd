import React, { useState } from 'react';

function CadastrarImagem() {
  const [base64Image, setBase64Image] = useState('');

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      convertImageToBase64(selectedFile, (base64String) => {
        console.log(base64String)
        setBase64Image(base64String);
      });
      
    }
  };

  const convertImageToBase64 = (file, callback) => {
    const reader = new FileReader();

    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      callback(base64String);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {base64Image && <img src={base64Image} alt="Converted to Base64" />}
    </div>
  );
}

export default CadastrarImagem;
