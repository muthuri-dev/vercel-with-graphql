"use client"
import { useQuery} from "@apollo/client";
import {GET_LINKS} from "@/graphql/queries";
import {Link} from ".prisma/client";

export default function Home() {
  const {data, loading,error} = useQuery(GET_LINKS);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.links.map((link:Link)=>(
          <div key={link.id}>
            <h1>title: {link.title}</h1>
            <p>desc: {link.description}</p>
            <p>cat: {link.category}</p>
            <p>image: {link.imageUrl}</p>
          </div>
      ))}
    </main>
  )
}
