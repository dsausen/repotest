var request = require("supertest"),
    app = require("../server.js")

describe("GET /", () => {
    it("displays 'Hello world!'", (done) => {
        request(app).get("/").expect("Hello world!", done)
    })
})
