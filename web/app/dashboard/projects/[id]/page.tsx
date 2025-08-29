import ProjectInfo from '@/app/components/ProjectInfo'
import React from 'react'

interface Props{
  params: {id: number}
}

const page = ({params: {id}}: Props) => {
  return (
    <div>
      <ProjectInfo />
      {id}
    </div>
  )
}

export default page
