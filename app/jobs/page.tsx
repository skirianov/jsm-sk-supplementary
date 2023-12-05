import { JobCard } from "@/components/jobCard";
import { Job, JobBoard } from "@/types";


export default async function JobsPage() {
  const response = await fetch("https://app.recrooit.com/api/job-boards/9038ad80", {
    method: "GET",
    headers: {
      'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_RECROOIT_API
    },
    next: {
      revalidate: 3600,
    }
  })

  const jobBoard: JobBoard = await response.json();
  const { positions, affiliateId } = jobBoard;

  console.log(positions)

  return (
    <section>
      <header className="bg-black flex flex-col gap-6 justify-center items-center h-64">
        <h1 className="text-5xl font-semibold text-center text-white">Jobs</h1>
        <p className="text-white text-2xl">I have <span className="text-pink-500">{positions.length}</span> jobs for <span className="text-pink-500">you</span></p>
      </header>
      <div className="flex flex-col gap-4 px-4 max-w-[1460px] 2xl:w-[1460px] xl:mx-auto my-12">
        <div className="px-4 flex flex-col gap-2">
          {positions.map((job: Job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>
      </div>
    </section>
  )
}