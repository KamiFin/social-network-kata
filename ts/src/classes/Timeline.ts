import { Post } from "./Post";

class SimpleTimeLine {
    private posts: Post[];

    constructor(posts: Post[]) {
        this.posts = posts;
    }

    getPosts() : Post[] {
        return this.posts;
    }

    addToTimeline(post: Post) {
        this.posts.push(post);
    }
}

export class UserTimeline extends SimpleTimeLine {
    private idUser: string;

    constructor(idUser: string, posts: Post[]) {
        super(posts);
        this.idUser = idUser;

    }
}