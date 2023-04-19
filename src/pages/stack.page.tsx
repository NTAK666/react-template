import { FC } from 'react';

type StackPageProps = {};

const StackPage: FC<StackPageProps> = ({}) => {
  return (
    <ul>
      <li className="font-semibold text-blue-500">Typescript</li>
      <li className="font-semibold text-cyan-500">React</li>
      <li className="font-semibold text-slate-900">Tailwindcss</li>
      <li className="font-semibold text-violet-500">Vite</li>
      <li className="font-semibold text-[#a56953]">Zustand</li>
      <li className="font-semibold text-red-500">React Query</li>
      <li className="font-semibold text-amber-500">React Location</li>
    </ul>
  );
};

export default StackPage;
