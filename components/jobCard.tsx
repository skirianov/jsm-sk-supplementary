import { Job } from "@/types";
import Link from "next/link";

export const JobCard = ({ job }: { job: Job }) => {

  const { title, isRemote, company, maxSalary, minSalary, maxEquity, minEquity } = job;

  return (
    <Link href={`/job/${job.id}`} key={job.id}>
      <article className="group flex flex-col gap-2 hover:bg-zinc-50 hover:cursor-pointer border rounded-md p-4">
        <div className="flex flex-col items-start gap-2 md:flex-row md:justify-between">
          <h3 className="text-md md:text-xl font-semibold group-hover:text-pink-500">{job.title}</h3>
          <span className="text-sm font-semibold flex items-center gap-1 justify-center group-hover:text-pink-500">
            {
              maxSalary && minSalary
                ? <span><span>${minSalary}</span> - <span>${maxSalary}</span></span>
                : <span className="text-red-900">Not Specified</span>
            }
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-semibold">{job.company.name}</span>
          <span className="text-sm font-semibold">{job.isRemote ? "🌍 Remote" : "🏢 Onsite"}</span>
        </div>
      </article>
    </Link>
  )
}