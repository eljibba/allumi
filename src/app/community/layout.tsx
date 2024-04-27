import { ReactNode } from 'react';

const CommunityLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen">
      {children}
    </div>
  );
};

export default CommunityLayout;