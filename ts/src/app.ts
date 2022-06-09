"use strict";

import { User } from "./classes/User";

function main() {
  const alice = new User("alice", "Alice", "ali@kata.com");
  
  // Write a post to timeline
  alice.writePost("First post of Alice");
  console.log(alice.getTimeline());
}

main();