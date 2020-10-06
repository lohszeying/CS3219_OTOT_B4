let chai = require('chai');
let chaiHttp = require('chai-http');
import app from "../index.js";
let id;

chai.use(chaiHttp);
chai.should();

describe("contacts", () => {
    describe("GET /", () => {
		//Test to get all contacts record
		it("should get all contacts record", (done) => {
            chai.request(app)
                .get('/api/contacts')
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                 });
        });
    });
    
    describe("POST /", () => {
		//Test to create a new contact
		it("should create a new contact", (done) => {
            chai.request(app)
                .post('/api/contacts')
                .send({name: "John Day"})
                .end((err, res) => {
                    res.should.have.status(200);
                    id = res.body.data._id;
                    done();
                 });
        });
    });
    
    describe("PUT /", () => {
		//Test to update 1 contact
		it("should update 1 contact", (done) => {
            chai.request(app)
                .put('/api/contacts/' + id)
                .send({name: "John Dayes"})
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                 });
        });
    });

    describe("PUT /", () => {
		//Test to delete 1 contact
		it("should delete 1 contact", (done) => {
            chai.request(app)
                .delete('/api/contacts/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                 });
        });
    });
});
