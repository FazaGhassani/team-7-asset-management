export interface User {
    id: number,
    username: string,
    password: string,
    role: string
}

export class UserModel {
    constructor(
        public id: number,
        public username: string,
        public password: string,
        public role: string
    ) { }
}