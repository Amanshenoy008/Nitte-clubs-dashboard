import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'


export default async function setevent(req:NextApiRequest ,res: NextApiResponse){


    const prisma = new PrismaClient()

    if(req.method === "POST"){

       // const ans = await prisma.events.create({})
        //const ress = JSON.parse(req.body)

        console.log(req.body)

        res.status(202).json({"message":"Done"})
    }

}