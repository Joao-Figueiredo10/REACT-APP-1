import { useState } from 'react';

function Notas() {

    const [formData, setFormData] = useState({
        nome: '',
        disciplina: '',
        notaTeste: '',
        teste: '',
        notaTrabalho: '',
        trabalho: '',
        notaAtitude: '',
        atitude: ''
    });

    function controlnotaTeste(e){
        const value = e.target.value;
        if (value < 0 ) {
            setFormData({ ...formData, notaTeste: 0 });
        } else if (value > 20) {
            setFormData({ ...formData, notaTeste: 20 });
        } else {
            setFormData({ ...formData, notaTeste: value });
        }
    }

    function controlnotaTrabalho(e){
        const value = e.target.value;
        if (value < 0 ) {
            setFormData({ ...formData, notaTrabalho: 0 });
        } else if (value > 20) {
            setFormData({ ...formData, notaTrabalho: 20 });
        } else {
            setFormData({ ...formData, notaTrabalho: value });
        }
    }

    function controlnotaAtitude(e){
        const value = e.target.value;
        if (value < 0 ) {
            setFormData({ ...formData, notaAtitude: 0 });
        } else if (value > 20) {
            setFormData({ ...formData, notaAtitude: 20 });
        } else {
            setFormData({ ...formData, notaAtitude: value });
        }
    }

    function controlteste(e){
        const value = e.target.value;
        if (value < 0 ) {
            setFormData({ ...formData, teste: 0 });
        } else if (value > 40) {
            setFormData({ ...formData, teste: 40 });
        } else {
            setFormData({ ...formData, teste: value });
        }
    }    

    function controltrabalho(e){
        const value = e.target.value;
        if (value < 0 ) {
            setFormData({ ...formData, trabalho: 0 });
        } else if (value > 40) {
            setFormData({ ...formData, trabalho: 40 });
        } else {
            setFormData({ ...formData, trabalho: value });
        }
    }  

    function controlatitude(e){
        const value = e.target.value;
        if (value < 0 ) {
            setFormData({ ...formData, atitude: 0 });
        } else if (value > 20) {
            setFormData({ ...formData, atitude: 20 });
        } else {
            setFormData({ ...formData, atitude: value });
        }
    } 

    function mediaTresNotas(e) {
        e.preventDefault();
        const media = (parseFloat(formData.notaTeste) + parseFloat(formData.notaTrabalho) + parseFloat(formData.notaAtitude)) / 3;
        alert(`A média das três notas é: ${media.toFixed(2)}`);
        if (media >= 9.5) {
            alert('Aprovado!');
        } else {
            alert('Reprovado!');
        }
    }

    function limparFormulario() {
        setFormData({ nome: '', disciplina: '', notaTeste: '', teste: '', notaTrabalho: '', trabalho: '', notaAtitude: '', atitude: '' });
        setDadosSubmetidos(null);
    }


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
                    <label for="disciplina">Disciplina</label>
                    <input type="text" class="form-control" id="disciplina" placeholder="Insira o nome da disciplina" value={formData.disciplina} onChange={(e) =>
                        setFormData({ ...formData, disciplina: e.target.value })} required />
                </div>

                <div class="row">
                    <div class="col">
                        <label for="notaTeste">Nota dos testes</label>
                        <input type="number" class="form-control" id="notaTeste" placeholder="Insira a nota do teste" value={formData.notaTeste} onChange={(e) => controlnotaTeste(e)} 
                            required />
                    </div>
                            
                    <div class="col">
                        <label for="teste">(% do teste)</label>
                        <input type="number" class="form-control" id="teste" placeholder="Insira o percentual do teste" value={formData.teste} onChange={(e) => controlteste(e)}
                            required /></div>

                            <div class="w-100"></div>

                    <div class="col">
                        <label for="notaTrabalho">Nota dos trabalhos</label>
                        <input type="number" class="form-control" id="notaTrabalho" placeholder="Insira a nota do trabalho" value={formData.notaTrabalho} onChange={(e) => controlnotaTrabalho(e)} 
                            required />
                    </div>

                    <div class="col">
                        <label for="trabalho">(%) trabalhos</label>
                        <input type="number" class="form-control" id="trabalho" placeholder="Insira o percentual dos trabalhos" value={formData.trabalho} onChange={(e) => controltrabalho(e)}
                            required />
                    </div>

                    <div class="w-100"></div>

                    <div class="col">
                        <label for="notaAtitude">Nota da atitude</label>
                        <input type="number" class="form-control" id="notaAtitude" placeholder="Insira a nota da atitude" value={formData.notaAtitude} onChange={(e) => controlnotaAtitude(e)} 
                            required />
                    </div>

                    <div class="col">
                        <label for="atitude">(% da atitude)</label>
                        <input type="number" class="form-control" id="atitude" placeholder="Insira o percentual da atitude" value={formData.atitude} onChange={(e) => controlatitude(e)}
                            required />
                    </div>
                </div>
                <button type="submit" class="btn btn-primary mt-3" onClick={mediaTresNotas}>Calcular média</button>

                <button type="button" class="btn btn-secondary mt-3 ml-2" onClick={limparFormulario}>Limpar</button>

            </form>
        </div>
    );
}

export default Notas;