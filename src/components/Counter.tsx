import { type RefObject } from 'react';
import { useCounter } from '../hooks/useCounter';

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export default function Counter({ value, suffix = '', className = '', duration }: CounterProps) {
  const { count, ref } = useCounter(value, duration);
  return (
    <span ref={ref as RefObject<HTMLSpanElement>} className={className}>
      {count}{suffix}
    </span>
  );
}
