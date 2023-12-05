import { JobBoard } from "@/types";

export default async function JobPage({ params }: { params: { id: string } }) {
  const response = await fetch("https://app.recrooit.com/api/job-boards/9038ad80", {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_RECROOIT_API
    }
  })

  const jobBoard: JobBoard = await response.json();

  const job = jobBoard.positions.find((job) => job.id === Number(params.id));

  console.log(job);

  return (
    <article className="w-3/4 mx-auto flex flex-col gap-8 items-center mt-12">
      <h1 className="text-5xl">{job?.title}</h1>
      <iframe
        width="600"
        height="450"
        loading="lazy"
        src="https://app.recrooit.com/job-boards/9038ad80"
      ></iframe>
    </article>
  )
}