export interface AlunoDTO {
    id_aluno?: number,
    ra: number,
    nome: string,
    sobrenome: string,
    data_nascimento: Date,
    email: string,
    endereco: string,
    celular: number,
    situacao?: boolean
}
