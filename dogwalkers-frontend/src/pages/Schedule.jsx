import 'bootstrap/dist/css/bootstrap.min.css';

export default function Schedule() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
      <div className="bg-secondary p-4 rounded shadow w-100" style={{ maxWidth: '500px' }}>
        <h2 className="mb-4 text-center">Agendar Passeio</h2>

        <form>
          <div className="form-group mb-3">
            <label htmlFor="data">Data</label>
            <input
              type="date"
              id="data"
              className="form-control bg-dark text-light border-light"
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="hora">Horário</label>
            <input
              type="time"
              id="hora"
              className="form-control bg-dark text-light border-light"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="servico">Serviço</label>
            <select
              id="servico"
              className="form-control bg-dark text-light border-light"
            >
              <option>Passeio simples</option>
              <option>Passeio com adestramento</option>
              <option>Passeio coletivo</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Confirmar Agendamento
          </button>
        </form>
      </div>
    </div>
  );
}

