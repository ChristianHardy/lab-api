import { Collection, MongoClient } from "mongodb";
import { EnvironmentVariables, getEnv } from "../config";
import { logger } from "../__helpers";

class Mongo {
	/**
	 * The mongo client 
	 */
	private client!: MongoClient;

	/**
	 * The ENV vars for this project
	 */
	private env: EnvironmentVariables = getEnv();

	/**
	 * Log the mongo db events
	 */
	private logEvents(): void {
		this.client.on("connectionReady", () => logger.success(`[database]: MongoDB is running at ${this.env.MONGO_PORT} port`));
		this.client.on("connectionClosed", () => logger.warn("[database]: connectionClosed"));
		this.client.on("error", (error) => logger.error("[database]: error", error));
	}

	/**
	 * Make a connection with Mongo DB
	 */
	public async connect(): Promise<void> {
		if (this.client) {
			return;
		}

		this.client = new MongoClient(this.env.MONGO_URL);
		this.logEvents();
		await this.client.connect();
	}

	/**
	 * Disconnect from mongo db
	 */
	public async disconnect(): Promise<void> {
		// this.client.close();
	}

	/**
	 * Return a Mongo DB collections instance
	 */
	public collection(): Collection {
		return this.client.db("task_db").collection("task_collection");
	}
}

export default new Mongo();
