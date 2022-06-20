import { APIGatewayProxyEvent } from "aws-lambda";
import { loginAction, sumAction } from "../src/actions/example.action";


describe('Unit test for lambda functions', function () {
    it('Verifies Loginaction 200 response with two auth headers', async () => {
        const event: APIGatewayProxyEvent = {
            headers: {username: "bob", password: "P@55w0rd"}
        } as any
        const result = await loginAction(event)

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual('{"result":"G7T0K3N"}');
    });

    it('Verifies Loginaction 200 response with one auth header', async () => {
        const event: APIGatewayProxyEvent = {
            headers: {username: "bob"}
        } as any
        const result = await loginAction(event)

        expect(result.statusCode).toEqual(200);
        expect(result.body).toEqual('{"result":"G7T0K3N"}');
    });

    it('Verifies Loginaction 401 response with empty headers', async () => {
        const event: APIGatewayProxyEvent = {
            headers: {}
        } as any
        const result = await loginAction(event)
    
        expect(result.statusCode).toEqual(401);
        expect(result.body).toEqual('{"result":"You are not Authorized"}');
    });

    it('Verifies Loginaction 500 response with no request header and body', async () => {
        const event: APIGatewayProxyEvent = {
        } as any
        const result = await loginAction(event)
    });

    it('Verifies Sumaction 500 response', async () => {
        const event: APIGatewayProxyEvent = {
            headers: {token: "G7T0K3N"},
            body: {"first": 1, "second": 2}
        } as any
        
        const result = await sumAction(event)
        expect(result.statusCode).toEqual(500);
    });
});