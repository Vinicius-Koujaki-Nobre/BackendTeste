import { Router } from "express";

const routes = Router()

//rota teste

routes.get("/", (req, res) => {
    return res.send('rota de teste')
})

//rota que rtetorna um json, uma lista nomeada "items"
routes.get("/funcionarios", (req, res) => {
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

routes.get("/ex", (req,res) =>{
    return res.json({
        items: [
            {
                id: "1",
                name: "batata",
                img: "https://organicosinbox.com.br/produto/batata-inglesa-500g/"
            },
            {
                id: "2",
                name: "cabelo",
                img: "https://at.pinterest.com/pin/304415256072780385/"
            },
            {
                id: "3",
                name: "igor3k",
                img: "https://acesse.one/yeBmt"
            }
        ]
    })
})

export default routes