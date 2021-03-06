## Lambda-Functions
Instructions of the assesment can be found in this file: [given_instructions.md](https://github.com/tux7P/Lambda-Functions/blob/main/Given_Instructions.md)

## Solution
1. ✅ Postman collection - [QA_Challenge.postman_collection.json](https://github.com/tux7P/Lambda-Functions/blob/main/test_resource/QA_Challenge.postman_collection.json)
2. ✅ Integration tests [Loginactions & Sumactions] - [Folder](https://github.com/tux7P/Lambda-Functions/tree/main/spec/cucumber/steps) & [Screenshot of passing tests](https://github.com/tux7P/Lambda-Functions/blob/main/test_resource/screenshots/Integration_tests.png)
3. ✅ Code coverage -[Folder](https://github.com/tux7P/Lambda-Functions/tree/main/coverage) & [Screenshot of passing tests](https://github.com/tux7P/Lambda-Functions/blob/main/test_resource/screenshots/code_coverage.png)
4. ✅ Bugs found - [Bug.md](https://github.com/tux7P/Lambda-Functions/blob/main/test_resource/Bug.md)

##### Besides that, my solution has:
* ⚡️ [Unit tests](https://github.com/tux7P/Lambda-Functions/blob/main/tests/unit.test.ts) [Loginactions & Sumactions] - Created to test both the lambda functions and to increase the code coverage with the help of Jest - [Screenshot of passing tests](https://github.com/tux7P/Lambda-Functions/blob/main/test_resource/screenshots/unit_tests.png)
* ⚡️ [Github Actions](https://github.com/tux7P/Lambda-Functions/actions) - Created a workflow to run Integration tests and Unit tests on every push to the main branch
* ⚡️ Superagent - Used to autoamte HTTP requests with a high-level abstraction 
* ⚡️ Jest - A testrunner used to automate unit tests with the flexibility to mock and stub the api calls 
* ⚡️ Code Abstraction - Code abstractions were made to simplify the test implememntation and for better maintainalibility and readability.
* ⚡️ [Commit style](https://github.com/tux7P/Lambda-Functions/commits/main) - Used conventional commit style.


## Task Accomplishment Steps:
1. Started with the local repo setup
2. Ran offline serverless locally
3. Explored lambda functions and its responses through POSTMAN
4. Observed the bugs in code
5. Created API tests using superagent
6. Then created Integration tests with cucumber & superagent
7. Wrote unit tests to improve the code coverage with Jest
8. Created a Github workflow to run unit and integration tests in CI/CD env
9. Documented the solution in README
10. Submitted the code repository for review

## Test Execution
1. Clone this repository
2. Navigate to the path the project was cloned in
3. Install dependencies using: 
```sh
yarn
```
4. Run integration tests using: 
```sh
yarn test:offline
```
5. Run unit tests using: 
```sh
yarn jest
```
Generate code coverage report using: 
```sh
yarn coverage
```
To test postman collection:
- Import the [collection](https://github.com/tux7P/Lambda-Functions/blob/main/test_resource/QA_Challenge.postman_collection.json) to Postman
- Install serverless globally: `npm -g install serverless@2.72.2`
- Start the server using: `serverless offline`
- Then run the collection

Further Ideas:
1. Improve the code coverage 
2. Implement stubs using Jest to test the lambda function
2. Implement Artillery tests for load testing 