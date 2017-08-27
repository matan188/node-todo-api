const expect = require('expect');
const request = require('supertest');

const {app} = require("./../server");
const {Todo} = require("./../models/todo");

var todos = [{
    text: 'Test todo 1'
}, {
    text: 'Test todo 2'
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => {
        return done();
    });
});

describe("Todos POST route", () => {
    it("should create new todo in db", (done) => {
        var text = "Test: add todo document";

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res) => {
                expect(res.body.text).toBe(text);
            })
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find({text}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((err) => {
                    return done(err);
                });
            });
    });

    it("should not create todo with invalid data", (done) => {
        var invalidData = {};

        request(app)
            .post('/todos')
            .send(invalidData)
            .expect(400)
            .end((err, res) => {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done(); 
                }).catch((err) => {
                    return done(err);
                });
            })
    });
});

describe("GET /todos", () => {
    it('Fetching all todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });
});