import { db } from "./db";
import { users } from "./mockedData";

async function main() {

    for (const user of users) {
        await db.user.upsert(
            {where: {id: user.id},  
            update:{}, 
            create:user}
        );
    }
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    await db.$disconnect()
    process.exit(1)
  })