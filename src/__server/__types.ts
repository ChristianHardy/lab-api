import { Request, Response } from "express";

/*------------------------------------------------------------------------
 * Types for Request & Response Methods
 -----------------------------------------------------------------------*/
export type ApiResponse = Response;
export type ApiRequest = Request;

/*------------------------------------------------------------------------
 * Types for the allowed API methods
 -----------------------------------------------------------------------*/
export type ApiMethod = "get" | "put" | "post" | "delete";

/*------------------------------------------------------------------------
 * Types for Express API 
 -----------------------------------------------------------------------*/
export type ApiHandler = (req: ApiRequest, res: Response) => Promise<ApiResponse>;

export type ExpressApi = {
	method: ApiMethod;
	path: string;
	handler: ApiHandler;
};

export type ExpressRoutesPool = Array<ExpressApi>;
