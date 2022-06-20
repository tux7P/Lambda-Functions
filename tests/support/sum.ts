import supertest from 'supertest';
const BASE_URL = 'http://localhost:3000'

exports.successfull_sumaction = function() {
    return supertest(BASE_URL)
      .post("/sumaction")
      .send({first: 1, second: 2})
      .set({token:"G7T0K3N"})
}

exports.unauthorized_sumaction = function() {
    return supertest(BASE_URL)
      .post("/sumaction")
      .send({first: 1, second: 2})
}

exports.internal_server_error_sumaction = function() {
    return supertest(BASE_URL)
      .post("/sumaction")
      .set({token:"G7T0K3N"})
}

exports.null_result_sumaction = function() {
    return supertest(BASE_URL)
      .post("/sumaction")
      .set({token:"G7T0K3N"})
      .send({})
}