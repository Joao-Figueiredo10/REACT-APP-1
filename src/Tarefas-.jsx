import React, { useState } from 'react';
function Tarefas() {

    const tarefas = []

    // Estado único "formData" guarda todos os campos do formulário num objeto
    const [formData, setFormData] = useState({
        titulo: '',
        data: '',
        descricao: ''
    });


    // Guarda os dados submetidos (para mostrar depois do envio)
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    const novoId = Date.now(); // Gera um número com base no tempo

    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        setDadosSubmetidos(formData); // guarda os dados preenchidos
    }

    // Limpa o formulário e os dados apresentados
    function limparTarefas() {
        setFormData({ titulo: '', data: '', descricao: '' });
        setDadosSubmetidos(null);
    }

    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit}>
                {/* Cada campo é controlado — o valor vem do estado React */}
                <div className="form-group">
                    <label>Titulo</label>
                    <input type="text" className="form-control" value={formData.titulo} onChange={(e) =>

                        setFormData({ ...formData, titulo: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label>Data</label>
                    <input type="date" className="form-control" value={formData.data} onChange={(e) =>
                        setFormData({ ...formData, data: e.target.value })} required />
                </div>

                <div className="form-group">
                    <label>Descricao</label>
                    <input type="text" className="form-control" value={formData.descricao} onChange={(e) =>
                        setFormData({ ...formData, descricao: e.target.value })} />
                </div>

                
                {/* Botões de ação */}
                <button className="btn btn-success mr-2">Enviar</button>

                <button type="button" className="btn btn-outline-secondary"

                    onClick={limparTarefas}>Limpar</button>
            </form>
            {/* Mostra os dados submetidos se existirem */}
            {dadosSubmetidos && (
                <div className="card mt-4">
                    <div className="card-body">
                        <h5 className="card-title">Tarefas</h5>
                        <p><strong>Titulo:</strong> {dadosSubmetidos.titulo}</p>
                        <p><strong>Data:</strong> {dadosSubmetidos.data}</p>
                        <p><strong>Descricao:</strong> {dadosSubmetidos.descricao}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Tarefas;