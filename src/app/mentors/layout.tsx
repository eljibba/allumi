import { ReactNode } from 'react';

const MentorsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen">
      {children}
    </div>
  );
};

export default MentorsLayout;