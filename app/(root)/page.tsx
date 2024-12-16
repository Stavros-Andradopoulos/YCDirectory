import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
    searchParams,
}: {
    searchParams: Promise<{ query?: string }>;
}) {
    const query = (await searchParams).query;
    const params = { search: query || null };

    const { data : posts} = await sanityFetch({query: STARTUPS_QUERY, params})

    return (
        <>
            <section className="pink_container">
                <h1 className="heading">
                    Pitch Your Startup, <br /> Connect with Entrepreneurs{" "}
                </h1>

                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
                    Competitions.
                </p>

                <SearchForm query={query} />
            </section>

            <section className="section_container">
                <p className="text-30-semibold">
                    {query ? `Seach results for "${query}"` : "All Startups"}
                </p>

                <ul className="mt-7 card_grid">
                    {posts?.length > 0 ? (
                        posts.map((post: StartupTypeCard, index: number) => (

                            //This is yours Stavros
                            <div key={index}>
                                <StartupCard key={post?._id} post={post} />
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No startups found</p>
                    )}
                </ul>
            </section>

            <SanityLive />
        </>
    );
}
