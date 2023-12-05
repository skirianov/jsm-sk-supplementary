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
      <section className="w-2/4 job-description">
        <div className="flex gap-2 justify-evenly">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400">Job Type</span>
            <span className="font-semibold">{job?.type === "fullTime" ? "Full Time" : "Part Time"}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400">Location</span>
            <span className="font-semibold">{job?.city || job?.country === "FREE" ? "Anywhere" : job?.country}</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-400">Annual gross salary range</span>
            <span className="font-semibold">
              {
                job?.maxSalary && job?.minSalary
                  ? <span><span>${job?.minSalary}</span> - <span>${job?.maxSalary}</span></span>
                  : <span className="text-red-900">Not Specified</span>
              }
            </span>
          </div>
        </div>
        <div className="h-[2px] bg-gray-200 rounded-sm w-[99%]  mx-auto my-4"></div>
        <div>
          <h2 className="text-3xl font-semibold mb-6">Description</h2>
          <span dangerouslySetInnerHTML={{ __html: job?.description!! }}></span>
        </div>
        <div className="h-[2px] bg-gray-200 rounded-sm w-[99%]  mx-auto my-4"></div>
        <div>
          <h2 className="text-3xl font-semibold mb-6">Requirements</h2>
          <span dangerouslySetInnerHTML={{ __html: job?.requirements!! }}></span>
        </div>
        <div className="h-[2px] bg-gray-200 rounded-sm w-[99%]  mx-auto my-4"></div>
        <div>
          <h2 className="text-3xl font-semibold mb-6">Benefits</h2>
          <span dangerouslySetInnerHTML={{ __html: job?.benefits!! }}></span>
        </div>
        <div className="h-[2px] bg-gray-200 rounded-sm w-[99%]  mx-auto my-4"></div>
        <div>
          <h2 className="text-3xl font-semibold mb-6">Selection process</h2>
          <span dangerouslySetInnerHTML={{ __html: job?.selectionProcess!! }}></span>
        </div>
        <div className="h-[2px] bg-gray-200 rounded-sm w-[99%]  mx-auto my-4"></div>
      </section>
    </article>
  )
}