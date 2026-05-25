# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

inicializar o programa:    npm run dev

# icons gratuitos
flaticon

comentário da app:

      {/*<h1 className="text-center text-primary">Olá React!</h1>
      <p className="lead text-center">
        Este é o teu primeiro componente React.
      </p>*/}
      {/* Evento onClick em React usa camelCase e chama uma função */}
      {/*<button
        className="btn btn-success d-block mx-auto"
        onClick={() => alert('Olá, Joao Figueiredo!')}
      >
        Clica-me!
      </button>*/}

      {/*<Contador />*/}

      {/*<h1 className="text-center">Componentes e Props</h1>
       Cada componente recebe props diferentes */}
      {/*<Mensagem mytext="Bem-vindo à tua primeira aplicação React!" />
      <Mensagem mytext="Os componentes permitem reutilizar código!" />
      <Alerta tipo ="success" texto="O meu novo alerta" />
      <Alerta tipo ="warning" texto="O meu novo alerta" />
      <Alerta tipo ="danger" texto="O meu novo alerta" />*/}

      
     {/* <Tarefas />*/}







     dentro das notas:


             <div className="container mt-4">
            <h1>Cálculo da nota final</h1>
            <h2>Dados do aluno</h2>
            <form>
                <div className="form-group">
                    <label>Nome do aluno:</label>
                    <input type="text" className="form-control" value={formData.nome} onChange={(e) =>
                        setFormData({ ...formData, nome: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label>Nota do testes:</label>
                    <input type="number" className="form-control" value={formData.notaTeste} onChange={(e) =>
                        setFormData({ ...formData, notaTeste: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label>(%) testes:</label>
                    <input type="number" className="form-control" value={formData.teste} onChange={(e) =>
                        setFormData({ ...formData, teste: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label>Nota dos trabalhos:</label>
                    <input type="number" className="form-control" value={formData.notaTrabalho} onChange={(e) =>
                        setFormData({ ...formData, notaTrabalho: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label>(%) trabalhos:</label>
                    <input type="number" className="form-control" value={formData.trabalho} onChange={(e) =>
                        setFormData({ ...formData, trabalho: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label>Nota das atitudes</label>
                    <input type="number" className="form-control" value={formData.notaAtitude} onChange={(e) =>
                        setFormData({ ...formData, notaAtitude: e.target.value })} required />
                </div>
                <div className="form-group">
                    <label>(%) atitudes:</label>
                    <input type="number" className="form-control" value={formData.atitude} onChange={(e) =>
                        setFormData({ ...formData, atitude: e.target.value })} required />
                </div>
            </form>
        </div>           