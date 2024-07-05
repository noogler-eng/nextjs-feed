import prisma from "@/app/lib/prisma"
import { NextRequest } from "next/server";

export async function POST(req: NextRequest){
    const body = await req.json();

    try{
        const feed = await prisma.post.create({       
            data: {
                title: body.title,
                content: body.content,
                authorId: body.authorId,
            }
        });
        return Response.json({
            susscess: true,
            msg: feed.id
        }, {status: 201}) 
    }catch(error){
        console.log(error);
        return Response.json({
            susscess: false,
            msg: "server side error"
        }, {status: 500})
    }
}


// GET /api/Create
// body { title: "", content: "", authorId: ""}