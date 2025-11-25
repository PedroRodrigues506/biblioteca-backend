export interface AlunoDTO {
    idAluno?: number,
    ra: number,
    nome: string,
    sobrenome: string,
    dataNascimento: Date,
    email: string,
    endereco: string,
    celular: number,
    situacao?: boolean
}
