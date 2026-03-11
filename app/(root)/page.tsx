import { Description } from "@radix-ui/react-toast";
import SearchForm from "../../components/searchForm";
import StartupCard from "../../components/StartupCard";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/query";

type StartupCardType = {
  _id: string;
  _createdAt: string;
  views: number;
  author: {
    _id: string;
    name: string;
  };
  title: string;
  category: string;
  description: string;
  image: string;
};

export default async function Home({searchParams} : {
  searchParams : Promise<{ query?: string }>
}) {
  const query  = (await searchParams).query;

  const posts = await client.fetch(STARTUP_QUERY);
  console.log(JSON.stringify(posts, null, 2));


  console.log("Hello from the Home page!");
  return (
    <>

    <section className="pink_container">
      <h1 className="heading">pitch your startup , <br />connect with entrepreneurs</h1>

      <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and get noticed in Virtual Competitions</p>

      <SearchForm query={query} />
    </section>

    <section className="section_container">
      <p className="text-30-semibold">
        {query? `Search results for "${query}"` : "All Startups"}
      </p>
      <ul className="mt-7 card_grid text-black">
        {posts?.length > 0 ? (
          posts.map((post : StartupCardType, index : number) => (
            <StartupCard key={post?._id} post={post}/>
          ))
        ) : (
          <p className="no-results">No startups found.</p>
        )}
      </ul>
    </section>

    
    </>
    
  );
}
