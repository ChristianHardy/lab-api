import { logger } from "./__helpers";
import { Server } from "./__server/server";
import mongodb from "./__server/mongodb";

export async function serve(): Promise<void> {
	const server = new Server();
	await mongodb.connect();
	server.start();
}

serve().catch((error) => logger.error(error));
