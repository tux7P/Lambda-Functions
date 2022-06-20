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
}
