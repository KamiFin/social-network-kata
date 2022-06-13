export class Post {
    private text: string;
    private publishDate: Date;
    private idUser: string;
    private idUserTag?: string;

    constructor(text: string, idUser: string, publishDate?: Date, idUserTag?: string) {
        this.text = text;
        this.idUser = idUser;
        this.publishDate = publishDate ?  publishDate : new Date();
        this.idUserTag = idUserTag;
    }

    public getPublishDate(): Date {
        return this.publishDate;
    }

    public getText(): string {
        return this.text;
    }

    public getIdUserTag(): string {
        return this.idUserTag;
    }

    public getIdUser(): string {
        return this.idUser;
    }
}