import { useState } from 'react';
import api from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', form);
      alert('Login bem-sucedido!');
      console.log('Token:', res.data.token);
    } catch (err) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <form className="bg-secondary p-4 rounded shadow-sm w-100" style={{ maxWidth: '400px' }} onSubmit={handleSubmit}>
        <h2 className="mb-4 text-center">Login</h2>

        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            className="form-control bg-dark text-light border-light"
            placeholder="Digite seu email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="password">Senha</label>
          <input
            name="password"
            type="password"
            className="form-control bg-dark text-light border-light"
            placeholder="Digite sua senha"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>
      </form>
    </div>
  );
}


