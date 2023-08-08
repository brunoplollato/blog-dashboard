import React from 'react';

function PageTitle({ title }: { title: string }) {
  return <h2 className="text-4xl font-bold mb-5 flex">{title}</h2>;
}

export default PageTitle;
