import { useCallback, useRef } from "react";
import party from "party-js";

const confettiSettings = {
  count: party.variation.range(40, 100),
  shapes: ["circle"],
};

export default function Home() {
  const buttonRef = useRef();

  const handleClick = useCallback(() => {
    if (buttonRef?.current) {
      party.confetti(buttonRef.current, confettiSettings);
    }
  }, []);

  return (
    <div className="bg-pink h-screen flex justify-center items-center">
      <button
        ref={buttonRef}
        onClick={handleClick}
        className="bg-cyan-300 px-4 py-2 uppercase rounded-md border-cyan-800 shadow-lg text-xl"
      >
        Konfetti
      </button>
    </div>
  );
}
