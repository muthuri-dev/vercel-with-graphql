"use client"
import { useQuery} from "@apollo/client";
import {GET_LINKS} from "@/graphql/queries";

export default function Home() {
  const {data, loading,error} = useQuery(GET_LINKS);
  const blogs = data?.link;
  console.log(blogs);

  if (loading) return 'Loading...';

  if (error) return `Error! ${error.message}`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.links.map((link:any)=>(
          <div key={link.id}>
            <h1>{link.title}</h1>
          </div>
      ))}
      kenya
    </main>
  )
}
