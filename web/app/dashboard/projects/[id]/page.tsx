import ProjectInfo from '@/app/components/ProjectInfo';
import React from 'react';

interface Props {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: Props) => {
  const { id } = await params; // Resolve the Promise to get the id

  return (
    <div>
      <ProjectInfo id={id} />
    </div>
  );
};

export default page;