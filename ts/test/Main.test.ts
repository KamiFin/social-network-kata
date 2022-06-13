import { expect } from "chai";
import { createAliceWithPost, createAliceWithPosts, createBobWithPost, createBobWithSubscription, createCharlieWithSubscriptions, createSocialNetwork, userWriteAPost } from "./utils";

describe('Social network kata', function () {
    it('Alice write a post to personal timeline', function () {

        // Create alice
        const socialNetwork = createSocialNetwork();
        createAliceWithPost(socialNetwork);

    });

    it('Bob can wiew alice timeline', function () {

        // Create alice
        const socialNetwork = createSocialNetwork();
        const alice = createAliceWithPost(socialNetwork);        

        /* 
            Bob can see Alice timeline from SocialNetwork obj but can also easily go to his subscriptions
            to find and read Alice timeline
        */
        const bob = createBobWithSubscription(socialNetwork, alice);
        const bobAliceSubscription = bob.getUserSubscription(alice.getId());
        expect(bobAliceSubscription).to.not.be.undefined;
        console.log(bobAliceSubscription.printUserTimeline());
    });

    it('Charlie can subscribe to users timelines, and view an aggregated list of their timelines', function () {
        
        const socialNetwork = createSocialNetwork();
        // Create alice
        const alice = createAliceWithPosts(socialNetwork);

        // Create bob
        const bob = createBobWithPost(socialNetwork);

        // Create Charlie and subscribe him to Alice and Bob
        const charlie = createCharlieWithSubscriptions(socialNetwork, [alice, bob]);
        console.log(charlie.printSubscriptionsTimeline());
    });
});