import { Post } from "./Post";
import { UserTimeline } from "./Timeline";

export class User {
    private id: string;
    private username: string;
    private email: string;

    private timeline: UserTimeline;

    constructor(id: string, username: string, email: string) {
        this.id = id,
        this.username = username;
        this.email = email;
        this.timeline = new UserTimeline(id, []);
    }

    
    writePost(text?: string) {
        const post = new Post(text, this.id);
        this.timeline.addToTimeline(post);
    }

    
    public getTimeline() : UserTimeline {
        return this.timeline
    }
    

}