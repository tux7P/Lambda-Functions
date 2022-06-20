import { binding, then, when } from 'cucumber-tsflow';
const LoginAction = require('../../../tests/support/login')

@binding()
export class ScenarioSteps {

  @when(/I send POST request with valid auth headers/)
  public async test1_01() {
    await LoginAction.successfull_loginaction()
  }

  @then(/I receive success response with auth token/)
  public async test1_02() {
    await LoginAction.successfull_loginaction().expect(200)
  }

  @when(/I send POST request without auth headers/)
  public async test2_01() {
    await LoginAction.unauthorized_loginaction()
  }

  @then(/I receive unauth response/)
  public async test02_02() {
    await LoginAction.unauthorized_loginaction().expect(401)
  }
}
