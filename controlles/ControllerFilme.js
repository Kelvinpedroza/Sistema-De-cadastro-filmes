// Dependias requeridas
const Filme = require("../model/Filmes");

// Construção do CRUD
module.exports = class FilmeController {
  // Create
  static cadastrarFilme(req, res) {
    res.render("filmes/Cadastrar");
  }

  static async filmeCreate(req, res) {
    const filme = {
      titulo: req.body.titulo,
      categoria: req.body.categoria,
      genero: req.body.genero,
      link_snopse: req.body.link_snopse,
    };
    await Filme.create(filme);
    res.redirect("/");

  }
  // Reader
  static async listarFilmes(req, res) {
    const filmes = await Filme.findAll({ raw: true });
    res.render("filmes/listar",{filmes});
  }

  // GET UPDATE
  static async UpdateFilme(req, res) {
    const id_filme = req.params.id_filme;
    const filme = await Filme.findOne({
      where: { id_filme: id_filme },
      raw: true,
    });
    res.render("filmes/update",{filme});
  }
  // POST UPDATE
  static async FilmeUptade(req, res) {
    const id_filme = req.body.id_filme;
    const filme = {
      titulo: req.body.titulo,
      categoria: req.body.categoria,
      genero: req.body.genero,
      link_snopse: req.body.link_snopse,
    };
    await Filme.update(filme, { where: { id_filme: id_filme },raw: true });
    res.redirect("/");
  }
  // DELETE
  static async RemoverFilme(req, res) {
    const id_filme = req.body.id_filme;
    await Filme.destroy({ where: { id_filme: id_filme} });
    res.redirect("/");
  }
};
