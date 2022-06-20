import supertest from 'supertest';
const BASE_URL = 'http://localhost:3000'

exports.successfull_loginaction = function() {
    return supertest(BASE_URL)
      .post("/loginaction")
      .set('username', 'bob')
      .set('password','P@55w0rd')
}