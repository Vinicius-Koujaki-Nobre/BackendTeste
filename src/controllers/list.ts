import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient()

export default {
    create : async(req: Request, res: Response) => {
        const item = await prisma.list.create({data: req.body})
        return res.status(201).json(item)
    },

    read : async(req: Request, res: Response) => {
        const items = await prisma.list.findMany({select: {image: true, description: true, price: true, quantity: true}})
        return res.status(200).json(items)
    },

    update : async(req: Request, res: Response) => {
        const id = req.params.id
        const item = await prisma.list.update({data: req.body, where: {id: +id}})
        return res.status(200).json(item)   
    },

    delete : async(req: Request, res: Response) => {
        const id = req.params.id
        const item = await prisma.list.delete({where: {id: +id}})
        return res.status(200).json(item)
    }
}