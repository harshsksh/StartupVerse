import { Description } from "@radix-ui/react-toast";
import SearchForm from "../../components/searchForm";
import StartupCard from "../../components/StartupCard";

export default async function Home({searchParams} : {
  searchParams : Promise<{ query?: string }>
}) {
  const query  = (await searchParams).query;

  const posts = [{
    _createdAt :  new Date().toISOString(),
    views : 55,
    author : {_id : 1, name : "John Doe"},
    _id : 1,
    description : "This is a description of the post",
    image : "https://source.unsplash.com/random/300x300/?technology",
    title : "StartupVerse",
    category : "Technology"
  }]

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
