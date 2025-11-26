import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pino from 'pino';
import routesRouter from './adapters/inbound/http/routesController';
import { createPrismaClient } from './infrastructure/dbClient';

const logger = pino();

async function main() {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());

  // create prisma client and attach to app.locals for adapters to use
  const prisma = createPrismaClient();
  app.locals.prisma = prisma;

  // simple health
  app.get('/health', (req, res) => res.json({ ok: true }));

  // api routes
  app.use('/api', routesRouter);

  const port = process.env.PORT ? Number(process.env.PORT) : 4000;
  app.listen(port, () => {
    logger.info(`Server listening on ${port}`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
