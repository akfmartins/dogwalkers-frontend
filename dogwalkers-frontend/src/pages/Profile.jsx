import 'bootstrap/dist/css/bootstrap.min.css';

export default function Profile() {
  // Simulando dados do usuário
  const usuario = {
    nome: 'João Silva',
    email: 'joao@email.com',
    telefone: '(11) 91234-5678'
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="bg-secondary p-4 rounded shadow w-100" style={{ maxWidth: '500px' }}>
        <h2 className="mb-4 text-center">Perfil</h2>

        <div className="form-group mb-3">
          <label>Nome</label>
          <input className="form-control bg-dark text-light border-light" value={usuario.nome} disabled />
        </div>

        <div className="form-group mb-3">
          <label>Email</label>
          <input className="form-control bg-dark text-light border-light" value={usuario.email} disabled />
        </div>

        <div className="form-group mb-4">
          <label>Telefone</label>
          <input className="form-control bg-dark text-light border-light" value={usuario.telefone} disabled />
        </div>

        <button className="btn btn-outline-light w-100">Editar Perfil</button>
      </div>
    </div>
  );
}
