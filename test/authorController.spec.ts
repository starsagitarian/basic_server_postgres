 import chai from "chai";
 import chaiHttp from "chai-http";
 import { app } from "../src/app";

 const { expect } = chai;
 chai.use(chaiHttp);

 describe ("Author Controller", () => {
    it("should return all authors", async () => {
        const res = await chai.request(app).get("/authors");
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an("array");
    });
 });

it("should return a specific author", async () => {
    const res = await chai.request(app).get("/authors/1");
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("object");
    expect(res.body.name).to.equal("Test Author");
});

it("should create a new author", async () => {
    const res = await chai.request(app).post("/authors").send({
        firstName: "Test",
        lastName: "Author",
        email: "test@example.com",
        phone: "1234567890"
    });
    expect(res.status).to.equal(201);
    expect(res.body).to.be.an("object");
    expect(res.body.name).to.equal("Test Author");
});
it("should update an existing author", async () => {
    const res = await chai.request(app).put("/authors/1").send({
        firstName: "Updated",
        lastName: "Author",
        email: "updated@example.com",
        phone: "0987654321"
    });
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("object");
    expect(res.body.name).to.equal("Updated Author");
});
it("should delete an existing author", async () => {
    const res = await chai.request(app).delete("/authors/1");
    expect(res.status).to.equal(204);
});