import Redis from "ioredis";

const redisClient = new Redis(
  "rediss://default:49b337785bab488bae54c6dc9029fce6@apn1-driving-hog-33853.upstash.io:33853"
);

export default redisClient;
