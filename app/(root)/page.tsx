import SearchForm from "../../components/searchForm";

export default async function Home({searchParams} : {
  searchParams : Promise<{ query?: string }>
}) {
  const query  = (await searchParams).query;
  console.log("Hello from the Home page!");
  return (
    <>

    <section className="pink_container">
      <h1 className="heading">pitch your startup , <br />connect with entrepreneurs</h1>

      <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and get noticed in Virtual Competitions</p>

      <SearchForm query={query} />
    </section>

    
    </>
    
  );
}
