import { useState, useEffect, memo } from 'react';

interface CountdownProps {
  targetDate: Date;
  className?: string;
  variant?: 'default' | 'compact';
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const useCountdown = (targetDate: Date) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return { timeLeft, isExpired };
};

const Countdown = memo(({ targetDate, className = '', variant = 'default' }: CountdownProps) => {
  const { timeLeft, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <div className={`text-center ${className}`}>
        <span className={`font-display font-bold text-primary text-glow ${variant === 'compact' ? 'text-sm' : 'text-2xl sm:text-3xl md:text-4xl'}`}>
          Event is Live!
        </span>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Days', short: 'D' },
    { value: timeLeft.hours, label: 'Hours', short: 'H' },
    { value: timeLeft.minutes, label: 'Minutes', short: 'M' },
    { value: timeLeft.seconds, label: 'Seconds', short: 'S' }
  ];

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {timeUnits.map((unit, index) => (
          <span key={unit.label} className="flex items-center">
            <span className="font-display text-xl font-bold text-foreground tabular-nums">
              {String(unit.value).padStart(2, '0')}
            </span>
            <span className="text-sm text-primary font-semibold mr-1">{unit.short}</span>
            {index < timeUnits.length - 1 && (
              <span className="text-muted-foreground mx-1 text-lg">:</span>
            )}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div
          key={unit.label}
          className="flex flex-col items-center min-w-[60px] sm:min-w-[80px] md:min-w-[100px]"
        >
          <div className="relative">
            <div className="bg-card/80 backdrop-blur border border-border rounded-lg px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 box-glow">
              <span className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
            </div>
            {index < timeUnits.length - 1 && (
              <span className="absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 text-primary text-xl sm:text-2xl font-bold hidden sm:block">
                :
              </span>
            )}
          </div>
          <span className="font-body text-[10px] sm:text-xs tracking-widest text-muted-foreground uppercase mt-2">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
});

Countdown.displayName = 'Countdown';

export { Countdown };
