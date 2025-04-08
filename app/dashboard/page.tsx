import ItemCard from "../components/ItemCard";


const Data = [
    {
        id: 1,
        title: "Github",
        description: "Stores your GitHub Stars",
        totalEntries: 100,
        lastUpdated: "2023-10-01"
    },
    {
        id: 2,
        title: "Bookmarks",
        description: "Stores your Bookmarks",
        totalEntries: 50,
        lastUpdated: "2023-10-02"
    },
    {
        id: 3,
        title: "YouTube",
        description: "Stores your YouTube Playlists",
        totalEntries: 200,
        lastUpdated: "2023-10-03"
    },
    {
        id: 4,
        title: "RSS",
        description: "Stores your RSS feeds",
        totalEntries: 150,
        lastUpdated: "2023-10-04"
    },
    {
        id: 5,
        title: "Stack Overflow",
        description: "Stores your Stack Overflow questions",
        totalEntries: 75,
        lastUpdated: "2023-10-05"
    },
    {
        id: 6,
        title: "Notes",
        description: "Stores your notes",
        totalEntries: 300,
        lastUpdated: "2023-10-06"
    }
]

function page() {
    return (
        <main>
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-6 py-4">
                {Data.map((item) => (
                    <ItemCard key={item.id} title={item.title} description={item.description} totalEntries={item.totalEntries} lastUpdated={item.lastUpdated}/>
                ))}
            </section>
        </main>
    );
}
 
export default page;