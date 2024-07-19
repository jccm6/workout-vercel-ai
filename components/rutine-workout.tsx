import { Card } from "@/components/ui/card";

export default function RutineWorkout({ data }: any) {
	// console.log("Dias", data?.workout?.dia);
	// console.log("Rutina", data?.workout?.rutina);
	// console.log(data?.key);

	return (
		<>
			{/* {data?.workout?.map((work: any, index: any) => (
				<div className="flex items-center justify-between">
					<div key={index} className="font-medium">
						{work.dia}
					</div>
					{work?.rutina?.map((e: any, index: any) => (
						<p key={index} className="text-muted-foreground">
							{e.pasos}
						</p>
					))}
				</div>
			))} */}

			{/* {data?.workout?.map((work: any, index: any) => (
				<div key={index}>
					<p>{work.dia}</p>
					{work?.rutina?.map((e: any, index: any) => (
						<p key={index}>{e.pasos}</p>
					))}
				</div>
			))} */}

			<Card className="max-w-md p-6 grid gap-6">
				<div className="flex items-center justify-between">
					<h2 className="text-2xl font-semibold">Tu Rutina</h2>
					<DumbbellIcon className="w-8 h-8 text-primary" />
				</div>
				<div className="grid gap-4">
					<div className="grid gap-2">
						{data?.workout?.map((work: any, index: any) => (
							<div key={index} className="mb-4">
								<div className="flex items-center justify-between">
									<div className="font-medium">{work.dia}</div>
								</div>
								{work?.rutina?.map((e: any, index: any) => (
									<li key={index} className="text-muted-foreground">
										{e.pasos}
									</li>
								))}
							</div>
						))}
					</div>
				</div>
			</Card>
		</>
	);
}

function DumbbellIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M14.4 14.4 9.6 9.6" />
			<path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
			<path d="m21.5 21.5-1.4-1.4" />
			<path d="M3.9 3.9 2.5 2.5" />
			<path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
		</svg>
	);
}

function XIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M18 6 6 18" />
			<path d="m6 6 12 12" />
		</svg>
	);
}

{
	/* <Card className="w-full max-w-md p-6 grid gap-6">
<div className="flex items-center justify-between">
  <h2 className="text-2xl font-semibold">Full Body Workout</h2>
  <DumbbellIcon className="w-8 h-8 text-primary" />
</div>
<div className="grid gap-4">
  <div className="grid gap-2">
    <div className="flex items-center justify-between">
      <div className="font-medium">Squats</div>
      <div className="text-muted-foreground">3 sets x 12 reps</div>
    </div>
    <p className="text-muted-foreground">
      Keep chest up, knees behind toes.
    </p>
  </div>
  <div className="grid gap-2">
    <div className="flex items-center justify-between">
      <div className="font-medium">Bench Press</div>
      <div className="text-muted-foreground">4 sets x 10 reps</div>
    </div>
    <p className="text-muted-foreground">
      Controlled descent, explode on the push.
    </p>
  </div>
  <div className="grid gap-2">
    <div className="flex items-center justify-between">
      <div className="font-medium">Deadlifts</div>
      <div className="text-muted-foreground">3 sets x 8 reps</div>
    </div>
    <p className="text-muted-foreground">
      Engage core, keep back straight.
    </p>
  </div>
  <div className="grid gap-2">
    <div className="flex items-center justify-between">
      <div className="font-medium">Pull-ups</div>
      <div className="text-muted-foreground">3 sets to failure</div>
    </div>
    <p className="text-muted-foreground">
      Use an overhand grip, chin over the bar.
    </p>
  </div>
  <div className="grid gap-2">
    <div className="flex items-center justify-between">
      <div className="font-medium">Shoulder Press</div>
      <div className="text-muted-foreground">4 sets x 10 reps</div>
    </div>
    <p className="text-muted-foreground">
      Sit up tall, keep core braced.
    </p>
  </div>
</div>
</Card> */
}
