import { useEffect, useRef } from 'preact/hooks';

type NubmersProps = {
  name: string;
  value: number;
};
export const Numbers = ({ name, value }: NubmersProps) => {
  const valueRef = useRef(null);

  useEffect(() => {
    initCountUp();
  }, []);

  const initCountUp = async () => {
    const countUpModule = await import('countup.js');

    const countUpAnim = new countUpModule.CountUp(valueRef.current, value, {
      enableScrollSpy: true,
      suffix: `${value < 100 ? '+' : ''}`,
      scrollSpyOnce: true,
      scrollSpyDelay: 500,
    });
  };

  return (
    <div
      id="numbers"
      class=" flex max-w-[148px] flex-col justify-between lg:max-w-[160px]"
    >
      <p class="align-middle text-md-700 text-brand">{name}</p>
      <p ref={valueRef} class="text-H2-mobile lg:text-H2-desktop">
        0
      </p>
    </div>
  );
};
