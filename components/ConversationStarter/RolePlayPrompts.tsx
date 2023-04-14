import { FC } from 'react';
import { useTranslation } from 'next-i18next';

const DEMO_ROLES = [
  'Accountant',
  'Writing Tutor',
  'Life Coach',
  'Email Writing Assistant',
  'Social Media Post Helper',
  'Career Counselor',
  'Research Paper Editor',
  'Python Pair Programmer',
  'Java Pair Programmer',
  'JavaScript/TypeScript Pair Programmer',
  'Data Science & Machine Learning Assistant',
  'Web Development Consultant',
  'Database Design Assistant',
  'Algorithm Design & Analysis Helper',
  'Software Engineering Best Practices Guide',
  'Coding Interview Coach',
  'Project Management Adviser',
  'Computer Networking Assistant',
  'Operating Systems Tutor',
  'Cybersecurity Consultant',
];

type Props = {
  roleOnClick: (roleName: string, roleContent: string) => void;
};

export const RolePlayPrompts: FC<Props> = ({ roleOnClick }) => {
  const { t: roleNameT } = useTranslation('roles');
  const { t: roleContentT } = useTranslation('rolesContent');

  return (
    <div className="mt-5 flex flex-col text-sm overflow-y-auto h-64">
      {DEMO_ROLES.map((roleName, index) => (
        <div
          key={index}
          className="mb-2 cursor-pointer rounded-md border border-neutral-200 bg-transparent p-1 pr-2 text-neutral-400 dark:border-neutral-600 dark:text-white"
          onClick={() =>
            roleOnClick(roleNameT(roleName), roleContentT(roleName))
          }
        >
          {roleNameT(roleName)}
        </div>
      ))}
    </div>
  );
};
