import { useEffect, useRef } from 'preact/hooks';

export interface CounterProps {
  label: string;
  value: number;
}

export default function Counter({ label, value }: CounterProps) {
  const valueRef = useRef<HTMLParagraphElement>(null);
  const displayValue =
    value >= 1000 ? Math.floor((value / 1000) * 10) / 10 : value;
  useEffect(() => {
    const initCountUp = async () => {
      const countUpModule = await import('countup.js');
      new countUpModule.CountUp(
        valueRef.current as HTMLParagraphElement,
        displayValue,
        {
          startVal,
          decimalPlaces: value >= 1000 ? 1 : 0,
          suffix,
          enableScrollSpy: true,
          scrollSpyOnce: true,
        }
      );
    };
    initCountUp();
  }, []);

  let suffix = '';
  if (value >= 1000) {
    suffix = 'k+';
  }
  if (!(value % 10) && value < 1000) {
    suffix = '+';
  }
  const startVal =
    Math.floor(displayValue / 2) < 1 ? 1 : Math.floor(displayValue / 2);

  return (
    <div id="numbers" class="flex w-min flex-col justify-between gap-1">
      <p class=" text-md-700 text-brand">{label}</p>
      <p ref={valueRef} class=" text-H2-mobile lg:text-H2-desktop">
        {startVal + suffix}
      </p>
    </div>
  );
}
