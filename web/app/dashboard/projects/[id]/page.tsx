import ProjectInfo from '@/app/components/ProjectInfo'
import React from 'react'

interface Props {
  params: { id: string } // Changed from number to string to match API data
}

const page = ({ params: { id } }: Props) => {
  return (
    <div>
      <ProjectInfo id={id} />
    </div>
  )
}

export default page