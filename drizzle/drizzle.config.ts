import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './migrations', // directory for migration files
    schema: './schema/index.ts', // path to the schema file
    dialect: 'sqlite', // database dialect
    dbCredentials: {
        url: '../dev-des-swap.db',
    },
});
