const mongoose = require('mongoose');
const util = require('util');
const debug = require('debug')('express-mogoose-es6-rest-api:index');
const mongoUri = config.mongo.uri;

mongoose.connect(mongoUri, { keepAlive: 1, useNewUrlParser: true });

const db = mongoose.connection;//database

db.once('open', () => {
	console.log('connected to db: ${mongoUri}');
});

db.on('error', () => {
	throw new Error('Unable to connect to DB: ${mongoUri}');
});

if (config.mongo.isDebug) {
	mongoose.set('debug', (collectionName, method, query, doc) => {
		debug('${collectionName}.${method}', util.inspect(query, false, 20), doc);
	});
}