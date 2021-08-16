import { EnvironmentVariables, getEnv } from "../config";
import { logger } from "../__helpers";
import { expressRoutes } from "./routes";
import { ExpressRoutesPool } from "./__types";
import express, { Express } from "express";

class Server {
	/**
	 * The application routes
	 */
	private routes: ExpressRoutesPool;
	/**
	 * The environment variables
	 */
	private env: EnvironmentVariables;
	/**
	 * The express instance
	 */
	private expressInstance: Express;

	/**
	 * The class constructor
	 */
	constructor() {
		this.env = getEnv();
		this.routes = expressRoutes;
		this.expressInstance = express();
	}

	/**
	 * Prepare API functions
	 */
	private prepare(): void {
		// MIddleware to parse body json
		this.expressInstance.use(express.json());

		// Create the APIs based on routes
		for (const route of this.routes) {
			this.expressInstance[route.method](route.path, route.handler);
		}
	}

	/**
	 * Serve the prepared API functions
	 */
	private serve(): void {
		this.expressInstance.listen(this.env.PORT, () => {
			logger.success(`⚡️[server]: Server is running at https://localhost:${this.env.PORT}`);
		});
	}
	
	/**
	 * Get the express instance
	 */
	public getExpressApp(): Express {
		return this.expressInstance;
	}

	/**
	 * Function to give up the local server
	 */
	public start(): void {
		logger.info(`⚡️[server]: Starting server at '${this.env.PORT}' port`);
		this.prepare();
		this.serve();
	}
}

export { Server };
