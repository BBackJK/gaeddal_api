import getTest from './test/getTest';
import postTest from './test/postTest';

export default (app) => {
    app.get('/api/test',getTest);
    app.post('/api/test',postTest);
}
