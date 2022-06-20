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
}
