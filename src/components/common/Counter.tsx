import { useEffect, useRef } from 'preact/hooks';

export interface CounterProps {
  label: string;
  value: number;
}

export default function Counter({ label, value }: CounterProps) {
  const valueRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const initCountUp = async () => {
      const countUpModule = await import('countup.js');
      new countUpModule.CountUp(
        valueRef.current as HTMLParagraphElement,
        value,
        {
          startVal,
          suffix,
          enableScrollSpy: true,
          scrollSpyOnce: true,
        }
      );
    };
    initCountUp();
  }, []);

  const startVal = Math.floor(value / 2);
  const suffix = `${value % 10 ? '' : '+'}`;

  return (
    <div id="numbers" class="flex w-min flex-col justify-between">
      <p class="text-md-700 text-brand">{label}</p>
      <p ref={valueRef} class="text-H2-mobile lg:text-H2-desktop">
        {startVal + suffix}
      </p>
    </div>
  );
}
