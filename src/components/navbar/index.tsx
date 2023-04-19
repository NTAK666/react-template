import { FC } from 'react';
import { Link } from '@tanstack/react-location';

type NavbarComponentProps = {};

const NavbarComponent: FC<NavbarComponentProps> = ({}) => {
  return (
    <>
      <ul className="flex gap-5">
        <li className="text-2xl font-semibold">
          <Link to="/">Home</Link>
        </li>
        <li className="text-2xl font-semibold">
          <Link to="/about">About</Link>
        </li>
        <li className="text-2xl font-semibold">
          <Link to="/stack">Stack</Link>
        </li>
        <li className="text-2xl font-semibold">
          <Link to="/counter">Counter</Link>
        </li>
        <li className="text-2xl font-semibold">
          <Link to="/fetch">Fetch</Link>
        </li>
      </ul>
    </>
  );
};

export default NavbarComponent;
