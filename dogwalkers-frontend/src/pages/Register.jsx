import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMsg("Usuário registrado com sucesso!");
        setForm({ name: "", email: "", password: "" });
      } else {
        setMsg(data.message || "Erro ao registrar");
      }
    } catch (error) {
      setMsg("Erro na comunicação com o servidor");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Registrar Usuário</h2>
      {msg && <p>{msg}</p>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nome"
          required
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          required
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Senha"
          required
          style={{ width: "100%", marginBottom: 10, padding: 8 }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Registrar
        </button>
      </form>
    </div>
  );
}
