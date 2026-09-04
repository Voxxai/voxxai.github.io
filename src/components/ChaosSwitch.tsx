"use client";

import { useEffect, useState } from "react";

export function ChaosSwitch() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.chaos = active ? "on" : "off";

    return () => {
      delete document.documentElement.dataset.chaos;
    };
  }, [active]);

  return (
    <button
      type="button"
      className="chaos-switch"
      aria-pressed={active}
      onClick={() => setActive((current) => !current)}
    >
      CHAOS {active ? "ON" : "OFF"}
      <span className="chaos-track" aria-hidden="true">
        <span />
      </span>
    </button>
  );
}
