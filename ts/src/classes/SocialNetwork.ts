import { User } from "./User";

export class SocialNetwork {
    private name: string;
    private users: User[];

    constructor() {
        this.name = "Social";
        this.users = [];
    }

    public getUsers(): User[] {
        return this.users;
    }

    public getUser(idUser: string): User {
        return this.users.find((u) => idUser === u.getId());
    }

    public addUser(user: User): number {
        this.users.push(user);
        return 0;
    }

    public updateUser(user: User) {
        const tmpUsers = this.users.map((u) => {
            if(u.getId() === user.getId()) {
                return user;
            }

            return u;
        });
        this.users = tmpUsers;
    }

    public getUsersNumber(): number {
        return this.getUsers().length;
    }
    
}