const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Permite requisições do frontend (localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173',
}));

// Para ler JSON no corpo das requisições
app.use(express.json());

// Rota teste para registro
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  console.log('Recebido registro:', name, email);

  // Aqui você pode salvar no banco, validar, etc.
  res.json({ message: 'Usuário registrado com sucesso!' });
});

// Rota teste login
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('Login tentado:', email);
  
  // Aqui você valida credenciais
  res.json({ message: 'Login efetuado com sucesso!' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
