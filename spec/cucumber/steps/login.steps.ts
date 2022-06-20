import { binding, then, when } from 'cucumber-tsflow';
const LoginAction = require('../../../tests/support/login')


@binding()
export class ScenarioSteps {

  @when(/I send post request with valid auth headers/)
  public async test1_01() {
    await LoginAction.successfull_loginaction()
  }

  @then(/I receive success response with auth token/)
  public async test1_02() {
    await LoginAction.successfull_loginaction().expect(200)
  }
}
