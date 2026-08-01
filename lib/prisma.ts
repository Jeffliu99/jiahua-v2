import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST || "35.208.250.55",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "unz2g8jcsy2ep",
  password: process.env.DB_PASSWORD || "Jiahua2026",
  database: process.env.DB_NAME || "dbxqhqgipw5hyb",
  connectionLimit: 1,
});

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}