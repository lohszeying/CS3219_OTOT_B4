'use strict';

const connectToDatabase = require('./db');
const Contact = require('./contactModel.js');
require('dotenv').config({ path: './variables.env' });
const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
};

module.exports.hello = (event, context, callback) => {
	console.log('Hello World');
	callback(null, 'Hello World');
};

module.exports.create = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	connectToDatabase().then(() => {
		Contact.create(JSON.parse(event.body))
			.then(contact =>
				callback(null, {
					statusCode: 200,
                    body: JSON.stringify(contact),
                    headers: corsHeaders
				})
			)
			.catch(err =>
				callback(null, {
					statusCode: err.statusCode || 500,
					headers: { 'Content-Type': 'text/plain' },
					body: 'Could not create the contact.'
				})
			);
	});
};

module.exports.getOne = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	connectToDatabase().then(() => {
		Contact.findById(event.pathParameters.id)
			.then(contact =>
				callback(null, {
					statusCode: 200,
                    body: JSON.stringify(contact),
                    headers: corsHeaders
				})
			)
			.catch(err =>
				callback(null, {
					statusCode: err.statusCode || 500,
					headers: { 'Content-Type': 'text/plain' },
					body: 'Could not fetch the contact.'
				})
			);
	});
};

module.exports.getAll = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	connectToDatabase().then(() => {
		Contact.find()
			.then(contact =>
				callback(null, {
					statusCode: 200,
                    body: JSON.stringify(contact),
                    headers: corsHeaders
				})
			)
			.catch(err =>
				callback(null, {
					statusCode: err.statusCode || 500,
					headers: { 'Content-Type': 'text/plain' },
					body: 'Could not fetch contacts.'
				})
			);
	});
};

module.exports.update = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	connectToDatabase().then(() => {
		Contact.findByIdAndUpdate(event.pathParameters.id, JSON.parse(event.body), {
			new: true
		})
			.then(contact =>
				callback(null, {
					statusCode: 200,
                    body: JSON.stringify(contact),
                    headers: corsHeaders
				})
			)
			.catch(err =>
				callback(null, {
					statusCode: err.statusCode || 500,
					headers: { 'Content-Type': 'text/plain' },
					body: 'Could not fetch the contact.'
				})
			);
	});
};

module.exports.delete = (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	connectToDatabase().then(() => {
		Contact.findByIdAndRemove(event.pathParameters.id)
			.then(contact =>
				callback(null, {
					statusCode: 200,
					body: JSON.stringify({
						message: 'Removed contact with id: ' + contact._id,
						note: contact
					}),
                    headers: corsHeaders
                })
			)
			.catch(err =>
				callback(null, {
					statusCode: err.statusCode || 500,
					headers: { 'Content-Type': 'text/plain' },
					body: 'Could not fetch the contact.'
				})
			);
	});
};