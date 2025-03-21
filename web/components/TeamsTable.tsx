import { TeamsInfo, columns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"
import profileImage from '@/public/profile-image.svg'


async function getData(): Promise<TeamsInfo[]> {
  
  return [
    {
      id: "1",
      image: { url: profileImage, alt: "Team Lead profile" },
      team: "DevOps",
      projectLead: "Jordan Mitchell",
      updatedOn: new Date("2024-03-09T04:10:00Z")
    },
    {
      id: "2",
      image: { url: profileImage, alt: "Team Lead profile" },
      team: "UI/UX",
      projectLead: "Jordan Mitchell",
      updatedOn: new Date("2024-03-09T04:10:00Z")
    },
    {
      id: "3",
      image: { url: profileImage, alt: "Team Lead profile" },
      team: "Backend Development",
      projectLead: "Jordan Mitchell",
      updatedOn: new Date("2024-03-09T04:10:00Z")
    },
    {
      id: "4",
      image: { url: profileImage, alt: "Team Lead profile" },
      team: "Frontend Development",
      projectLead: "John Mitchell",
      updatedOn: new Date("2024-03-09T04:10:00Z")
    },
    {
      id: "5",
      image: { url: profileImage, alt: "Team Lead profile" },
      team: "Product Management",
      projectLead: "Jordan Mitchell",
      updatedOn: new Date("2024-03-09T04:10:00Z")
    },
  
  ]
}

export default async function TeamsTable() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
