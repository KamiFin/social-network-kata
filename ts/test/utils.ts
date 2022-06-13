import { User } from "../src/classes/User";
import { SocialNetwork } from "../src/classes/SocialNetwork";
import { expect } from "chai";

export function createSocialNetwork(): SocialNetwork { 
    return new SocialNetwork();
}

export function createAlice(socialNetwork: SocialNetwork): User {
    const beforeNbrUsers =  socialNetwork.getUsersNumber();
    const alice = new User("alice", "Alice", "ali@kata.com");
    socialNetwork.addUser(alice);
    expect(socialNetwork.getUsersNumber()).to.equal(beforeNbrUsers + 1);
    return alice;
}

export function createAliceWithPost(socialNetwork: SocialNetwork): User { 
    const alice = createAlice(socialNetwork);
    
    // Write a post to timeline
    userWriteAPost(socialNetwork, alice, "First post of Alice", new Date("2022-06-10"));

    socialNetwork.updateUser(alice);
    const newAlice = socialNetwork.getUser(alice.getId());
    expect(newAlice.getTimeline().getPosts().length).to.equal(1);
    return newAlice;
}

export function createAliceWithPosts(socialNetwork: SocialNetwork): User { 
    const alice = createAliceWithPost(socialNetwork);
    // Write a post to timeline
    userWriteAPost(socialNetwork, alice, "Second post of Alice", new Date("2022-07-14"));

    socialNetwork.updateUser(alice);
    const newAlice = socialNetwork.getUser(alice.getId());
    expect(newAlice.getTimeline().getPosts().length).to.equal(2);
    return newAlice;
}

export function createBobWithSubscription(socialNetwork: SocialNetwork, userSubscription: User): User { 
    const bob = createBob(socialNetwork);
    bob.addUserSubscription(userSubscription);
    socialNetwork.updateUser(bob);
    const newBob = socialNetwork.getUser(bob.getId());
    expect(newBob.getUserSubscriptions().length).to.equal(1);
    return newBob;
}

function createBob(socialNetwork: SocialNetwork): User { 
    const beforeNbrUsers =  socialNetwork.getUsersNumber();
    const bob = new User("bob", "Bob", "bob@kata.com");
    socialNetwork.addUser(bob);
    expect(socialNetwork.getUsersNumber()).to.equal(beforeNbrUsers + 1);
    return bob;
}

export function createBobWithPost(socialNetwork: SocialNetwork): User { 
    const bob = createBob(socialNetwork);
    
    // Write a post to timeline
    userWriteAPost(socialNetwork, bob, "First post of Bob", new Date("2022-06-25"));

    const newBob = socialNetwork.getUser(bob.getId());
    expect(newBob.getTimeline().getPosts().length).to.equal(1);
    return newBob;
}

function createCharlie(socialNetwork: SocialNetwork): User { 
    const beforeNbrUsers =  socialNetwork.getUsersNumber();
    const charlie = new User("charlie", "Charlie", "charlie@kata.com");
    socialNetwork.addUser(charlie);
    expect(socialNetwork.getUsersNumber()).to.equal(beforeNbrUsers + 1);
    return charlie;
}

export function createCharlieWithSubscriptions(socialNetwork: SocialNetwork, userSubscriptions: User[]): User { 
    const charlie =  createCharlie(socialNetwork);

    charlie.addUserSubscriptions(userSubscriptions);
    socialNetwork.updateUser(charlie);
    const newCharlie = socialNetwork.getUser(charlie.getId());
    expect(newCharlie.getUserSubscriptions().length).to.equal(2);
    return newCharlie;
}

export function userWriteAPost(socialNetwork: SocialNetwork, user: User, post: string, publishDate?: Date): User {

    if(user && post.length > 0) {
        const beforeNrPosts = user.getTimeline().getPosts().length;
        user.writePost(post, publishDate);
        expect(user.getTimeline().getPosts().length).to.equal(beforeNrPosts + 1);
        socialNetwork.updateUser(user);
    }

    return user;
}