## Lambda-Functions
Instructions of the assesment can be found in this file: given_instructions.md

## Solution
1. ✅ Postman collection - [Link](../test_resource/QA_Challenge.postman_collection.json)
2. ✅ Integration tests [Loginactions & Sumactions] - [Link](../spec/cucumber/steps)
3. ✅ Code coverage - [Link](../test_resource/code_coverage.png)
4. ✅ Bugs found - [Link](../test_resource/Bug.md)

##### Besides that, my solution has:
* Unit tests [Loginactions & Sumactions] - Created to test both the lambda functions and to increase the code coverage with the help of Jest. 
* Github Actions - Created a workflow to run Integration tests and Unit tests on every push to the main branch
* Superagent - To autoamte HTTP requests with a high-level abstraction 
* Jest - A toolbox used to automate unit tests with the flexibility to mock and stub the api calls 
* Code Abstraction - Code abstractions were made to simplify the test implememntation and for better maintainalibility and readability.
* Commit style - Used conventional commit style.


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
3. Install dependencies: 
```sh
yarn
```
4. Run integration tests: mocha test
```sh
yarn test:offline
```
5. Run unit tests: 
```sh
yarn jest
```
To generate code coverage report: 
```sh
yarn coverage
```
To test postman collection:
    1. Import the collection to Postman
    2. Install serverless globally: `npm -g install serverless@2.72.2`
    3. Start the server using: `serverless offline`
    3. Then run the collection

Further Ideas:
1. Improve the code coverage 
2. Implement stubs using Jest to test the lambda function
2. Implement Artillery tests for load testing 