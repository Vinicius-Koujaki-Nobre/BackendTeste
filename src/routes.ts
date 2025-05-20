import { Router, Request, Response } from "express";
import userController from "./controllers/user"

const routes = Router()

//rota teste

routes.get("/", (req: Request, res: Response) : any => {
    return res.send('rota de teste')
})

//rota que rtetorna um json, uma lista nomeada "items"
routes.get("/funcionarios", (req: Request, res: Response) : any => {
    return res.json({
        items: [
            {
                id: "1",
                nome: "Andre",
                cargo: "dev",
                idade: 25,
                custoPorHora: 120,
                temLicenca: false
            },
            {
                id: "2",
                nome: "Cabelo",
                cargo: "segurança",
                idade: 20,
                custoPorHora: 100,
                temLicenca: false
            },
            {
                id: "3",
                nome: "T",
                cargo: "acionista",
                idade: 22,
                custoPorHora: 220,
                temLicenca: false
            }
        ]
    })
})

routes.get("/ex", (req: Request, res: Response) : any =>{
    return res.json({
        items: [
            {
                id: "1",
                name: "batata",
                img: "https://organicosinbox.com.br/wp-content/uploads/2020/11/batata-inglesa-organica.jpg"
            },
            {
                id: "2",
                name: "cabelo",
                img: "https://www.fiquediva.com.br/-/media/project/loreal/brand-sites/fiquediva/usa/pt-br/articles/blog/2024/tipos-de-cabelo/cabelos-ondulados/cabelo-ondulado.jpg?rev=b3d5315c059c4b9ca7370f57a3e27078"
            },
            {
                id: "3",
                name: "igor3k",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_hCdPAc0tHj1CyteYuUlDeLEpQfa8IY4gXZjSVLlBObZuS33lw8GahS-sYOzNVwZKwrQ&usqp=CAU"
            }
        ]
    })
})

routes.post("/users", (req: Request, res: Response) : any => userController.create(req, res))


export default routes