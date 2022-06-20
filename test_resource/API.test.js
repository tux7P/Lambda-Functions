const request = require("supertest")("http://localhost:3000");

describe("POST Sumaction", function () {
    it("Returns 200 response", async function () {
      const response = await request
        .post("/sumaction")
        .send({first: 1, second: 2})
        .set({token:"G7T0K3N"})
        .expect(200)
        .expect({"result": 3});
    });

    it("Returns 401 response", async function () {
        const response = await request
          .post("/sumaction")
          .send({first: 1, second: 2})
          .expect(401)
          .expect({"result": 401});
    });

    it("Returns 200 response with no body and results null", async function () {
        const response = await request
        .post("/sumaction")
        .send({})
        .set({token:"G7T0K3N"})
        .expect(200)
        .expect({"result": null});
    });

    it("Missing body returns 500", async function () {
        const response = await request
        .post("/sumaction")
        .set({token:"G7T0K3N"})
        .expect(500)
        .expect({"result": "Missing Body"});
    });
  });
    
describe("POST Loginaction", function () {
  it("Returns 200 response", async function () {
    const response = await request
      .post("/loginaction")
      .set({username:"bob", password:"P@55w0rd"})
      .expect(200)
      .expect({"result": "G7T0K3N"});
  });

  it("Returns 401 response", async function () {
      const response = await request
        .post("/loginaction")
        .expect(401)
        .expect({"result": "You are not Authorized"});
  });

  it("Returns 200 response with username and without password", async function () {
      const response = await request
      .post("/loginaction")
      .send({})
      .set({username:"bob"})
      .expect(200)
      .expect({"result": "G7T0K3N"});
  });
});