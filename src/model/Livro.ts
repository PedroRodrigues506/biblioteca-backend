class Livro {
    private id: number;
    private titulo: string;
    private autor: string;
    private editora: string;
    private anoPublicacao: Date;
    private isbn: number;
    private quantidadeTotal: number;
    private quantidadeDisponivel: number;
    private valorAquisicao: number;
    private status: string;

    constructor(
        _id: number,
        _titulo: string,
        _autor: string,
        _editora: string,
        _anoPublicacao: Date,
        _isbn: number,
        _quantidadeTotal: number,
        _quantidadeDisponivel: number,
        _valorAquisicao: number,
        _status: string,
    ) {
        this.id = _id;
        this.titulo = _titulo;
        this.autor = _autor;
        this.editora = _editora;
        this.anoPublicacao = _anoPublicacao;
        this.isbn = _isbn;
        this.quantidadeTotal = _quantidadeTotal;
        this.quantidadeDisponivel = _quantidadeDisponivel;
         this.valorAquisicao = _valorAquisicao;
        this.status = _status;
    }

    public getId(): number {
    return this.id;
  }

   public setId(_id: number): void{
    this.id = _id;
   }
}