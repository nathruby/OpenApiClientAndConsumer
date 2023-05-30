import express, {Express, Request, Response} from 'express';
import { TestsApi, Configuration, ConfigurationParameters } from '../../apiClient/build/testClient'

const app: Express = express();
const port = 3001;

const configuration: Configuration = new Configuration({
    basePath: 'http://localhost:3000'
});

const intantiatedTestsApi: TestsApi = new TestsApi(configuration);

app.get('/', async (req: Request, res: Response)=>{
    //res.send('Hello, this is Express + TypeScript');
    const testsResponse = await intantiatedTestsApi.getTest(3);
    res.send(testsResponse.data);
});

app.listen(port, ()=> {
    console.log(`[Server]: I am running at http://localhost:${port}`);
});