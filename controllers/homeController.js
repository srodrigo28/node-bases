exports.paginaInicial = (req, res) => {
    res.send(`
        <h1>Contato</h1>
        <form method="post" action="/form">
            Nome: <input type="text" name="nome" />
            Contato: <input type="text" name="contato" />
            <button>Enviar</button>
        </form>
    `);
} 