import { FC } from 'react';

type LoadingComponentProps = {};

const LoadingComponent: FC<LoadingComponentProps> = ({}) => {
  return <div className="lds-dual-ring"></div>;
};

export default LoadingComponent;
