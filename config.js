var config = {};

config.twitter = {};
config.cassandra = {};

config.twitter.CONSUMER_KEY: "YOUR_CONSUMER_KEY",
config.twitter.CONSUMER_SECRET: "YOUR_CONSUMER_SECRET",
config.twitter.ACCESS_TOKEN_KEY: "YOUR_ACCESS_TOKEN_KEY",
config.twitter.ACCESS_TOKEN_SECRET: "YOUR_ACCESS_TOKEN_SECRET",

config.cassandra.CONTACTPOINTS = 'YOUR IP FROM CASSANDRA';
config.cassandra.AUTHPROVIDER_USER = 'cassandra';
config.cassandra.AUTHPROVIDER_PASSWORD = 'cassandra';
config.cassandra.KEYSPACE =  'olympictest';

module.exports = config;
