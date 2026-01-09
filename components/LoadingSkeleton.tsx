
import React from 'react';

export const LoadingSkeleton: React.FC = () => {
  const SkeletonCard = () => (
    <div className="bg-gray-800/60 p-5 rounded-xl space-y-4">
      <div className="h-6 w-1/2 bg-gray-700 rounded-md"></div>
      <div className="h-4 w-full bg-gray-700 rounded-md"></div>
      <div className="h-4 w-3/4 bg-gray-700 rounded-md"></div>
      <div className="h-4 w-5/6 bg-gray-700 rounded-md"></div>
    </div>
  );

  return (
    <div className="animate-pulse grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="flex flex-col gap-6">
        <SkeletonCard />
        <SkeletonCard />
      </div>
      <div className="flex flex-col gap-6">
        <div className="bg-gray-800/60 p-5 rounded-xl space-y-4 h-[400px]">
           <div className="h-6 w-1/2 bg-gray-700 rounded-md"></div>
            <div className="h-4 w-full bg-gray-700 rounded-md"></div>
            <div className="h-4 w-3/4 bg-gray-700 rounded-md"></div>
            <div className="h-4 w-5/6 bg-gray-700 rounded-md"></div>
            <div className="h-4 w-full bg-gray-700 rounded-md"></div>
            <div className="h-4 w-3/4 bg-gray-700 rounded-md"></div>
        </div>
         <SkeletonCard />
      </div>
      <div className="flex flex-col gap-6">
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};
