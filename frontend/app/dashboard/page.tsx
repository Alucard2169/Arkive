import Link from "next/link";
import ServiceCard from "../components/ServiceCard";
import { USER_SERVICES } from "../data/fakeUserData";
import { SERVICES } from "../data/serviceRegistry";

function Page() {
  const merged = USER_SERVICES.map(user => {
    const meta = SERVICES.find(s => s.id === user.serviceId);
    return {
      ...meta,
      ...user,
    };
  });

  return (
    <main>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 px-6 py-4">
        {merged.map(item => (
          <Link key={item.serviceId} href={`/dashboard/${item.serviceId}`} className="block">
            <ServiceCard
              title={item.title}
              description={item.description}
              totalEntries={item.totalEntries}
              lastUpdated={item.lastUpdated}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Page;
