# 🐍 FURIA Fan ID – Conheça o Fã

**FURIA Fan ID** é uma plataforma desenvolvida para aproximar ainda mais os fãs da organização FURIA de eSports. Com ela, é possível criar um perfil personalizado com dados reais, validar documentos por OCR (reconhecimento óptico de caracteres) e conectar redes sociais e perfis de jogos para construir uma identidade digital completa do torcedor.

---

## 🚀 Funcionalidades

✅ Cadastro com dados pessoais  
✅ Upload de documentos com validação por OCR (IA)  
✅ Integração com Instagram e HLTV  
✅ Pontuação de engajamento baseada em interações e perfis vinculados  
✅ Geração de perfil com QR Code exclusivo

---

## 📸 Demonstração Visual

O protótipo visual está no repositório.

---

## 🛠️ Tecnologias Utilizadas

| Camada     | Tecnologia                |
|------------|---------------------------|
| Front-end  | React + Tailwind CSS      |
| Back-end   | Node.js + Express         |
| OCR / IA   | Tesseract.js              |
| Upload     | Multer                    |

---

## 🧪 Como Rodar o Projeto

### 📁 Backend (OCR + Express)
```bash
cd backend
npm install
node app.js
```

### 🌐 Frontend (React)
```bash
cd frontend
npm install
npm start
```

> O front-end irá rodar em `http://localhost:3000` e o backend em `http://localhost:4000`

---

## 🧠 Como Funciona a Validação de Documentos

Ao fazer upload do documento, o sistema utiliza o `Tesseract.js` para extrair o texto da imagem. Em seguida, ele verifica se há informações como CPF ou nome legível. Essa é uma etapa de verificação básica que pode ser estendida com IA mais avançada ou validação com base em bases públicas.

---

## 📡 Integração com Redes Sociais

Atualmente simulada com campos de entrada, mas o sistema está preparado para futuras integrações com autenticação via OAuth (Instagram, Twitter, HLTV, etc).

---

## 🤝 Contribuição

Sinta-se livre para contribuir com melhorias, novas validações, integração com Steam, API de eventos ou autenticação com redes sociais reais!

---

## 👨‍💻 Autor

Desenvolvido por **Isabella Rodrigues Gon** para o Challenge #2: Know Your Fan (FURIA Experience).
