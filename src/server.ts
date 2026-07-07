import app from "./app"
import { prisma } from "./app/lib/prisma";

const port = process.env.PORT;

const main = async() => {
  try {
    await prisma.$connect();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`)
    })
  } catch (error) {
    console.log(`Server is disconnect`)
     await prisma.$disconnect();
  }
}


main();
