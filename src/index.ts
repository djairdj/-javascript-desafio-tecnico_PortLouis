import {app} from './app'
import {Express} from 'express'

const application: Express = app;
const port: number = 8080;
application.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
});
