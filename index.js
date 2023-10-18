import express from 'express';
import 'dotenv/config';
import client from './db/db.js';
import studentRoutes from './routers/studentRoutes.js';



const app = express();
const port = 3000 || process.env.PORT;
app.use(express.json());
app.use('/api/students', studentRoutes);
app.get('/',(req, res)=>{
    res.send('Hello World')
});
client.on('connected', () => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})
















