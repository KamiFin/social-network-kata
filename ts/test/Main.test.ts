import { expect } from "chai";
import { User } from "../src/classes/User"
import { createAlice, createBob, userWriteAPost } from "./utils";

describe('Alice write a post to personal timeline', function () {
    it('write a post', function () {
        const alice = createAlice();
  
        // Write a post to timeline
        userWriteAPost(alice, "Firs post of Alice");
        expect(alice.getTimeline().getPosts().length).to.equal(1);
    });
});

describe('Bob can view Alice’s timeline', function () {
    it('View timeline', function () {
        const alice = createAlice();
        const bob = createBob();
  
        // Write a post to timeline
        userWriteAPost(alice, "Firs post of Alice");

        expect(alice.getTimeline().getPosts().length).to.equal(1);
    });
});