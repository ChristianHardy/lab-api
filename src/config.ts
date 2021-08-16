import dotenv from "dotenv";
import { toNumber, toStr } from "./__helpers";

// Start dotenv configuration
dotenv.config();

type EnvironmentVariables = {
	// Mongo DB vars
	MONGO_PORT: number;
	MONGO_USER: string;
	MONGO_PASS: string;
	MONGO_URL: string;

	// Application vars
	PORT: number;
};

function getEnv(): EnvironmentVariables {
	const mongoUser = toStr(process.env.MONGO_USER, "root");
	const mongoPass = toStr(process.env.MONGO_PASS, "demo");
	const mongoPort = toNumber(process.env.MONGO_PORT, 8181);
	
	return {
		// Mongo DB vars
		MONGO_PORT: mongoPort,
		MONGO_USER: mongoUser,
		MONGO_PASS: toStr(process.env.MONGO_PASS, "demo"),
		MONGO_URL: `mongodb://${mongoUser}:${mongoPass}@localhost:${mongoPort}/`,

		// Application vars
		PORT: toNumber(process.env.PORT, 3000),
	};
}

export { EnvironmentVariables, getEnv };
