import { useState } from 'react';

function Notas() {

    const [formData, setFormData] = useState({
        nome: '',
        notaTeste: '',
        teste: '',
        notaTrabalho: '',
        trabalho: '',
        notaAtitude: '',
        atitude: '',
    });


    return (
        <div class="container">
            <h1>Cálculo da nota final</h1>
            <h2>Dados do aluno</h2>
            <form>
                <div class="form-group">
                    <label for="nome">Nome do aluno</label>
                    <input type="text" class="form-control" id="nome" placeholder="Insira o nome do aluno" value={formData.nome} onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })} required />
                </div>
                <div class="form-group">
                    <label for="notaTeste">Nota do teste</label>
                    <input type="number" class="form-control" id="notaTeste" placeholder="Insira a nota do teste" value={formData.notaTeste} onChange={(e) =>
                        setFormData({ ...formData, notaTeste: e.target.value })} required />
                </div>
                <div class="form-group">
                    <label for="teste">Descrição do teste</label>
                    <input type="text" class="form-control" id="teste" placeholder="Insira a descrição do teste" value={formData.teste} onChange={(e) =>
                        setFormData({ ...formData, teste: e.target.value })} required />
                </div>
                <div class="form-group">
                    <label for="notaTrabalho">Nota do trabalho</label>
                    <input type="number" class="form-control" id="notaTrabalho" placeholder="Insira a nota do trabalho" value={formData.notaTrabalho} onChange={(e) =>
                        setFormData({ ...formData, notaTrabalho: e.target.value })} required />
                </div>
                <div class="form-group">
                    <label for="trabalho">Descrição do trabalho</label>
                    <input type="text" class="form-control" id="trabalho" placeholder="Insira a descrição do trabalho" value={formData.trabalho} onChange={(e) =>
                        setFormData({ ...formData, trabalho: e.target.value })} required />
                </div>
                <div class="form-group">
                    <label for="notaAtitude">Nota da atitude</label>
                    <input type="number" class="form-control" id="notaAtitude" placeholder="Insira a nota da atitude" value={formData.notaAtitude} onChange={(e) =>
                        setFormData({ ...formData, notaAtitude: e.target.value })} required />
                </div>
                <div class="form-group">
                    <label for="atitude">Descrição da atitude</label>
                    <input type="text" class="form-control" id="atitude" placeholder="Insira a descrição da atitude" value={formData.atitude} onChange={(e) =>
                        setFormData({ ...formData, atitude: e.target.value })} required />
                </div>
            </form>
            <div class="row">
                <div class="col">col</div>
                <div class="col">col</div>
                <div class="w-100"></div>
                <div class="col">col</div>
                <div class="col">col</div>
            </div>
            
        </div>
    );
}

export default Notas;