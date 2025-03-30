import express from 'express'; 
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
app.use(express.json());

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/',(req,res)=> res.send('Hi  my first page,'));
 

const PORT = 6000;
app.listen(PORT,() => console.log(`Server Running on port: http://localhost:${PORT}`))