import prisma from "@/app/lib/prisma"
import { NextRequest } from "next/server";

export async function GET(req: NextRequest){

    const page =  Number(req.nextUrl.searchParams.get("page"));

    try{
        const feeds = await prisma.post.findMany({
            select: {
                title: true,
                content: true,
                published: true,
                createdAt: true,
                updatedAt: true,
                author: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                    }
                }
            },
            skip: page-1,
            take: 5
        });
        return Response.json({
            susscess: true,
            msg: feeds
        }, {status: 200}) 
    }catch(error){
        console.log(error);
        return Response.json({
            susscess: false,
            msg: "server side error"
        }, {status: 500})
    }

}


// GET /api/hello?page=0,1,2,...