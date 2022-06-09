import { User } from "../src/classes/User";

export function createAlice(): User { 
    return new User("alice", "Alice", "ali@kata.com");
}

export function createBob(): User { 
    return new User("bob", "Bob", "bob@kata.com");
}

export function userWriteAPost(user: User, post: string): User {
    if(user && post.length > 0) {
        user.writePost(post);
    }

    return user;
}