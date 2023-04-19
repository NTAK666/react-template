import { FC } from 'react';

type AboutPageProps = {};

const AboutPage: FC<AboutPageProps> = ({}) => {
  return (
    <p>
      Created by{' '}
      <a
        href="https://nguyentruonganhkiet.work"
        target="_blank"
        rel="noreferrer"
        className="font-semibold text-blue-500"
      >
        Nguyen Truong Anh Kiet
      </a>
    </p>
  );
};

export default AboutPage;
