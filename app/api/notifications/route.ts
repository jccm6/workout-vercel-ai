import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { notificationSchema } from "./schema";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
	const { days, ubicacion, objetivo, condicionFisica, limitaciones } =
		await req.json();
	console.log("Cuantos día", days);
	console.log("Ubicacion", ubicacion);
	console.log("Objetvo", objetivo);
	console.log("Condicion Fisica", condicionFisica);
	console.log("Limitacion Fisica", limitaciones);

	const result = await streamObject({
		model: openai("gpt-4-turbo"),
		schema: notificationSchema,
		prompt: `Dame una ruta de ${days} dias de ejercicios en el ${ubicacion} en base a los siguientes requerimientos: ${objetivo}, ${condicionFisica}. Toma en cuenta la siguiente limitación fisica ${limitaciones}`,
	});

	// for await (const partialObject of result.partialObjectStream) {
	// 	console.clear();
	// 	console.log(partialObject);
	// }

	return result.toTextStreamResponse();
}
