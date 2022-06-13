export class Post {
    private text: string;
    private publishDate: Date;
    private idUser: string;

    constructor(text: string, idUser: string) {
        this.text = text;
        this.idUser = idUser;
        this.publishDate = new Date();
    }

    public getPublishDate(): Date {
        return this.publishDate;
    }

    public getText(): string {
        return this.text;
    }

    public getIdUser(): string {
        return this.idUser;
    }

    public setPublishDate(publishDate: Date) {
        this.publishDate = publishDate;
    }
}