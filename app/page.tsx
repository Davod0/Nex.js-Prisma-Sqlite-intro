import { db } from "@/prisma/db";

export default async function Home() {

  const users = await db.user.findMany({/*data som hämtas filtereras här innuti*/});

  return (
    <main className="container mx-auto p-8">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <li key={user.id} className="bg-cyan-600 rounded-lg shadow-md p-4 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
                <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
                <p className="text-gray-600">{user.roll}</p>
            </li>
          ))}
        </ul>
    </main>
  );
}
