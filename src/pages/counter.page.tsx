import { FC } from 'react';
import { useCounterStore } from '@/stores/counter.store';

type CounterPageProps = {};

const CounterPage: FC<CounterPageProps> = ({}) => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <>
      <div className="flex flex-col items-center space-y-2">
        <h1>{count}</h1>
        <div className="btn-group flex gap-5">
          <button
            onClick={increment}
            className="rounded bg-slate-900 px-6 py-2 text-white transition duration-200 hover:bg-slate-600"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="rounded bg-slate-900 px-6 py-2 text-white transition duration-200 hover:bg-slate-600"
          >
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterPage;
