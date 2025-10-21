import { service } from "./service.js";

const port: number = 3333;

service.listen(port, () => {
    console.log(`Servidor executando no endereço http://localhost:${port}`);
})