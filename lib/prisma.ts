import { PrismaClient } from "@prisma/client";

import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";

import { PrismaPg } from "@prisma/adapter-pg";

neonConfig.webSocketConstructor = ws;

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

function createPrismaClient() {
  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    const connectionString = process.env.DATABASE_URL;

    if (!connectionString) {
      throw new Error("DATABASE_URL is not set");
    }

    const adapter = new PrismaNeon({
      connectionString,
    });

    return new PrismaClient({
      adapter,
    });
  }

  const localConnectionString =
    process.env.DIRECT_URL || process.env.DATABASE_URL;

  if (!localConnectionString) {
    throw new Error("DIRECT_URL or DATABASE_URL is not set");
  }

  const adapter = new PrismaPg({
    connectionString: localConnectionString,
  });

  return new PrismaClient({
    adapter,
  });
}

export const prisma =
  globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}