import 'bootstrap/dist/css/bootstrap.min.css';

export default function History() {
  // Simulando agendamentos anteriores
  const agendamentos = [
    { data: '2025-06-28', servico: 'Passeio simples', status: 'Concluído' },
    { data: '2025-06-26', servico: 'Passeio coletivo', status: 'Cancelado' }
  ];

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 py-5">
      <div className="container bg-secondary p-4 rounded shadow">
        <h2 className="mb-4 text-center">Histórico de Agendamentos</h2>

        <table className="table table-dark table-striped table-bordered">
          <thead>
            <tr>
              <th>Data</th>
              <th>Serviço</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {agendamentos.map((ag, index) => (
              <tr key={index}>
                <td>{ag.data}</td>
                <td>{ag.servico}</td>
                <td>{ag.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
