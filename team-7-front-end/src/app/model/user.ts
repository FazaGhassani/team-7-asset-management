export interface User {
    user_id: number,
    username: string,
    password: string,
    role: string,
    enabled: boolean
}

export class UserModel {
    constructor(
        public username: string,
        public password: string,
        public role: string,
        public enabled: boolean
    ) { }
}