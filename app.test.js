const app = require('./app');
const supertest = require('supertest');
const mongoose = require('mongoose');
const adminToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzgzMTJkNzFmYTdiZTJiMDBiYTFlOSIsImVtYWlsIjoiMTgxMDIwM2JtQGdtYWlsLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY0Nzg1ODk0MCwiZXhwIjoxNjQ3ODYyNTQwfQ.MJCs2Ykuwlp9MflzIrJvL9pPKp4scwqvSEkBwmYb32c";

describe('app', () => {
	beforeAll(async() => {
		await mongoose.disconnect();
		const mongoUrl = `${process.env.MONGODB_URI}${process.env.DB_NAME}`;
		await mongoose.connect(mongoUrl);
	});
	afterAll(async() => {
		await mongoose.disconnect();
	});

	describe('GET /users', () => {

		describe('GET: when the request is valid', () => {

			it('should get all users', async() => {
				const response = await supertest(app)
					.get('/users')
					.auth(adminToken, {
						type: 'bearer'
					});

				expect(response.status).toBe(200);
				// expect(response.body[0]).toEqual({ id: 1, username: 'admin', password: 'admin' });
				expect(response.body[0]).toMatchObject({
					email: expect.any(String),
					password: expect.any(String),
					role: expect.any(String),
				});
				expect(response.header['content-type']).toBe('application/json; charset=utf-8');
			});
		});

		describe('GET: when the request is not valid', () => {});

	});

	describe('POST /register', () => {

		describe('POST: when the request body is valid', () => {

			it('given email and password', async() => {
				const email = `1810203bm8${Date.now()}@gmail.com`;
				const response = await supertest(app)
					.post('/register')
					.send({
						email,
						password: "bm09",
						role: "admin",
						first_name: "Bekzod",
						last_name: "Mukhamedov",
						date_of_birth: "10/11/1999",
						gender: "male",
						country_of_residence: "Uzbekistan"
					});

				expect(response.status).toBe(200);
				expect(response.body).toEqual({
					email,
					password: expect.any(String),
					role: "admin",
					first_name: "Bekzod",
					last_name: "Mukhamedov",
					date_of_birth: "10/11/1999",
					gender: "male",
					country_of_residence: "Uzbekistan",
					categories: [],
					_id: expect.any(String),
					accounts: [],
					createdAt: expect.any(String),
					updatedAt: expect.any(String),
					__v: 0
				});
				expect(response.header['content-type']).toBe('application/json; charset=utf-8');

			})

		});

		describe('POST: when the request body is not valid', () => {

			it('given no username', async() => {

				const response = await supertest(app)
					.post('/register')
					.send({ password: 'guest' });

				expect(response.status).toBe(400);
				expect(response.header['content-type']).toBe('application/json; charset=utf-8');

			});

		});

	})

});