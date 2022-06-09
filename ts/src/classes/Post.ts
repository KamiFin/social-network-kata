
export class Post {
    text: string;
    publishDate: Date;
    idUser: string;

    constructor(text: string, idUser: string) {
        this.text = text;
        this.idUser = idUser;
        this.publishDate = new Date();
    }
}