import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

export function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 13, minutes: 27, seconds: 44 });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return prev;
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="px-4 sm:px-6 mt-4">
      <div className="max-w-[1415px] mx-auto">
        <div className="bg-[#F5EDE6] rounded-xl px-5 sm:px-8 lg:px-12 py-6 sm:py-8 lg:py-10 flex flex-col md:flex-row items-center justify-between gap-5 md:gap-4">
          {/* Title */}
          <div className="shrink-0 text-center md:text-left">
            <span className="text-[13px] sm:text-[14px] uppercase tracking-[0.1em] text-[#1A1A1A]" style={{ fontWeight: 700 }}>
              Flash Sale Ending Soon
            </span>
          </div>

          {/* Countdown */}
          <div className="flex items-center gap-2 sm:gap-3">
            {[
              { val: pad(timeLeft.days), label: "Days" },
              { val: pad(timeLeft.hours), label: "Hrs" },
              { val: pad(timeLeft.minutes), label: "Min" },
              { val: pad(timeLeft.seconds), label: "Sec" },
            ].map((unit, i) => (
              <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
                <div className="text-center min-w-[36px] sm:min-w-[44px]">
                  <div className="text-[26px] sm:text-[32px] lg:text-[36px] leading-none text-[#1A1A1A] tabular-nums" style={{ fontWeight: 700 }}>
                    {unit.val}
                  </div>
                </div>
                {i < 3 && (
                  <span className="text-[16px] sm:text-[20px] text-[#1A1A1A]/40" style={{ fontWeight: 700 }}>:</span>
                )}
              </div>
            ))}
          </div>

          {/* Description — hidden on small */}
          <div className="hidden lg:block text-[14px] text-[#3a3a3a] leading-relaxed max-w-[200px]">
            Save on professional products, bestsellers & more
          </div>

          {/* CTA */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 bg-[#1A1A1A] text-white px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-[13px] sm:text-[14px] hover:bg-[#333] transition-colors shrink-0"
            style={{ fontWeight: 600 }}
          >
            {copied ? (
              <>
                <Check size={16} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy Code: NAIL20
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
