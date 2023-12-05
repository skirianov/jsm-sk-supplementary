import { JobCard } from "@/components/jobCard";
import { Job, JobBoard } from "@/types";


export default async function JobsPage() {
  const response = await fetch("https://app.recrooit.com/api/job-boards/9038ad80", {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_RECROOIT_API
    }
  })

  const jobBoard: JobBoard = await response.json();
  const { positions, affiliateId } = jobBoard;


  return (
    <section className="flex flex-col gap-4 mt-8 px-4 max-w-[1460px] 2xl:w-[1460px] xl:mx-auto">
      <div className="px-4 flex flex-col gap-2">
        {positions.map((job: Job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </div>
    </section>
  )
}