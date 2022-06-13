import { Post } from "./Post";
import { UserTimeline } from "./Timeline";

class SimpleUser {
    protected id: string;
    protected username: string;
    protected email: string;

    public getId() : string {
        return this.id;
    }

    public getUsername() : string {
        return this.username;
    }

    public getEmail() : string {
        return this.email;
    }

    constructor(id: string, username: string, email: string) {
        this.id = id,
        this.username = username;
        this.email = email;
    }
}

export class User extends SimpleUser {

    private timeline: UserTimeline;
    private userSubscriptions: User[];

    constructor(id: string, username: string, email: string) {
        super(id, username, email);
        this.timeline = new UserTimeline(id, []);
        this.userSubscriptions = [];
    }

    
    public writePost(text?: string, publishDate?: Date) {
        const post = new Post(text, this.id);
        if(publishDate) post.setPublishDate(publishDate);
        this.timeline.addToTimeline(post);
    }

    public getId() : string {
        return this.id;
    }
    
    public getTimeline() : UserTimeline {
        return this.timeline;
    }

    public getUsername() : string {
        return this.username;
    }

    public getUserSubscriptions(): User[] {
        return this.userSubscriptions;
    }

    public getUserSubscription(idUser: string): User {
        return this.userSubscriptions.find((sub) => { return idUser === sub.id });
    }
    
    public addUserSubscription(user: User) {
        this.userSubscriptions.push(user);
    }

    public addUserSubscriptions(users: User[]) {
        this.userSubscriptions = this.userSubscriptions.concat(users);
    }

    public printUserTimeline(): string {
        const builder: string[] = [];

        builder.push("s/" + this.username);
        builder.push('\n');
        
        this.timeline.getPosts().forEach((post) => {
            builder.push(post.getPublishDate().toLocaleString());
            builder.push('\n');
            builder.push(post.getText());

            builder.push('\n');
            builder.push('\n');
        })

        return builder.join("");
     }

    private getUsersSubscriptionTimeline(): Post[] {
        let timeline: Post[] = [];
        this.userSubscriptions.forEach((u) => {
            timeline = timeline.concat(u.getTimeline().getPosts());
        });

        return timeline;
    }

    private getUsersSubscriptionTimelineOrdByDate(): Post[] {
        const timeline = this.getUsersSubscriptionTimeline();
        return timeline.sort((a, b) =>  b.getPublishDate().getTime() - a.getPublishDate().getTime());
    }

    public printSubscriptionsTimeline(): string {
        const usrSubsTimeline = this.getUsersSubscriptionTimelineOrdByDate();
        const builder: string[] = [];

        usrSubsTimeline.forEach((timelinePost) => {
                const usr = this.getUserSubscription(timelinePost.getIdUser());
                builder.push("s/" + usr.getUsername());
                builder.push('\n');
                
                builder.push(timelinePost.getPublishDate().toLocaleString());
                builder.push('\n');
                builder.push(timelinePost.getText());
        
                builder.push('\n');
                builder.push('\n');
        });
    
        return builder.join("");
    }

}
