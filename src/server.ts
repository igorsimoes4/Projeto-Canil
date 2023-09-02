import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

// Configuro o .ENV //
dotenv.config();

// Crio o Server //
const server = express();

// Confguro o Template Engine //
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

// Configuro a Pasta Publica //
server.use(express.static(path.join(__dirname, '../public')));

// Rotas //
server.use(mainRoutes);

server.use( ( req: Request, res: Response  ) => {
    res.send('Página não encontrada!');
} );

// Roda o Server //
server.listen(process.env.PORT);