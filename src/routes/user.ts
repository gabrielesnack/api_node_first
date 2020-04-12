import { Router } from 'express';

const user = Router();

user.get('/', (req, res) => {
    return res.send('hello world3');
});

export default user;