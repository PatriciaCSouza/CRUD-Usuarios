export class Usuario {
    constructor(
        public Id: string = '',
        public Nome: string = '',
        public Sobrenome: string = '',
        public Email: string = '',
        public DataNascimento: string = '',
        public Perfil: string = '',
    ) { }
}