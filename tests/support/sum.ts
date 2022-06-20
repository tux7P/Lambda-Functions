import supertest from 'supertest';
const BASE_URL = 'http://localhost:3000'

exports.successfull_sumaction = function() {
    return supertest(BASE_URL)
      .post("/sumaction")
      .send({first: 1, second: 2})
      .set({token:"G7T0K3N"})
}