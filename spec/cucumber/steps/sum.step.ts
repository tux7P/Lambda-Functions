import { binding, then, when } from 'cucumber-tsflow';
const sumAction = require('../../../tests/support/sum')

@binding()
export class ScenarioSteps {

  @when(/I send POST request with two numbers and valid header/)
  public async test1_01() {
    await sumAction.successfull_sumaction()
  }

  @then(/I receive success response with a total of two numbers/)
  public async test1_02() {
    await sumAction.successfull_sumaction()
        .expect(200)
        .expect({"result": 3})
  }

  @when(/I send POST request without authotization headers/)
  public async test2_01() {
    await sumAction.unauthorized_sumaction()
  }

  @then(/I get unauth response/)
  public async test2_02() {
    await sumAction.unauthorized_sumaction()
        .expect(401)
        .expect({"result": 401})
  }

  @when(/I send POST request with authotization header and without request body/)
  public async test3_01() {
    await sumAction.internal_server_error_sumaction()
  }

  @then(/I get internal server error/)
  public async test3_02() {
    await sumAction.internal_server_error_sumaction()
        .expect(500)
        .expect({"result": "Missing Body"})
  }

  @when(/I send POST request with auth header and empty body/)
  public async test4_01() {
    await sumAction.null_result_sumaction()
  }

  @then(/I get null value as result with success response code/)
  public async test4_02() {
    await sumAction.null_result_sumaction()
        .expect(200)
        .expect({"result": null})
  }
}
