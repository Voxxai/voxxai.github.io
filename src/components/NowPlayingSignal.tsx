"use client";

import { useState } from "react";

export function NowPlayingSignal() {
  const [failed, setFailed] = useState(false);

  return (
    <a
      className="now-playing-artifact"
      href="https://voxxai.pythonanywhere.com/link"
      target="_blank"
      rel="noreferrer"
      aria-label="Open the currently playing track on Spotify"
    >
      {failed ? (
        <span className="signal-fallback">
          <strong>Signal quiet.</strong>
          <span>Open Spotify anyway →</span>
        </span>
      ) : (
        // Dynamic SVG rendered by the public Spotify-Readme service.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="https://voxxai.pythonanywhere.com/?theme=dark&spin=true&eq_color=FF2D95"
          alt="Voxxai's currently playing Spotify track"
          width="495"
          height="135"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </a>
  );
}
