import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('document', file);
    const res = await axios.post('http://localhost:4000/upload-doc', formData);
    setResult(res.data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">FURIA Fan ID - Upload de Documento</h1>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button
        onClick={handleUpload}
        className="bg-purple-600 text-white px-4 py-2 rounded ml-4"
      >
        Enviar
      </button>

      {result && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">Resultado:</h2>
          <p className="mt-2"><strong>Texto Extraído:</strong> {result.extractedText}</p>
          <p className="mt-2"><strong>Documento Válido:</strong> {result.valid ? 'Sim' : 'Não'}</p>
        </div>
      )}
    </div>
  );
}
