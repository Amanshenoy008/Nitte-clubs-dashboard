import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { errorToJSON } from 'next/dist/server/render'


export default async function setevent(req:NextApiRequest ,res: NextApiResponse){


    const prisma: any = new PrismaClient()

    if(req.method === "POST"){

       // const ans = await prisma.events.create({})
        //const ress = JSON.parse(req.body)

        console.log(req.body)
        const {title, timendate , Venue , detail , clubname , img} = req.body

        try{
        const newdata = detail.slice(0,-2)+'...'
        const dataevent = await prisma.events.upsert({
            where:{
                clubname:clubname
            },
            create:{
                title:title,
                notifievent:newdata,
                clubname:clubname,
                img:img,
            },
            update:{
                title:title,
                notifievent:newdata,
                clubname:clubname,
                img:img,
            }
        })

        const model = prisma[clubname]
        const clubdata = await model.create({
            data:{
                title:title,
                timendata:timendate,
                venue:Venue,
                eventdetail:detail,
            }
        })

        res.status(202).json({"message":"Done"})}
        catch(err){
            console.log(err)
            res.send(err)
        }
    }

}