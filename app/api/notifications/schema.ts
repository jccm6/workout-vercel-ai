import { z } from "zod";

// define a schema for the notifications
export const notificationSchema = z.object({
	workout: z.array(
		z.object({
			dia: z.string().describe("Rutina de cada día"),
			rutina: z.array(
				z.object({ pasos: z.string().describe("Pasos de la rutina") })
			),
			// rutina: z.array(z.string()).describe("describe la rutina del día"),
		})
	),
});
