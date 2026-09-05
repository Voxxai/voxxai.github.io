"use client";

import { useState } from "react";

export function NowPlayingSignal() {
  const [enabled, setEnabled] = useState(false);
  const [failed, setFailed] = useState(false);

  if (!enabled) {
    return (
      <div>
        <p className="widget-privacy">
          Optional external content: loading the music widget sends your IP
          address and browser information to Voxxai&apos;s PythonAnywhere service.
          Your choice lasts only while this component stays open.{" "}
          <a href="/privacy.html">Privacy details</a>
        </p>
        <button type="button" className="button button-secondary"
          onClick={() => { setFailed(false); setEnabled(true); }}>
          Load music widget
        </button>
      </div>
    );
  }

  return (
    <div>
      <a className="now-playing-artifact"
        href="https://voxxai.pythonanywhere.com/link"
        target="_blank" rel="noreferrer"
        aria-label="Open the currently playing track on Spotify via PythonAnywhere">
        {failed ? (
          <span className="signal-fallback">
            <strong>Signal quiet.</strong>
            <span>Open track anyway →</span>
          </span>
        ) : (
          // This external request is mounted only after explicit opt-in.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="https://voxxai.pythonanywhere.com/?theme=dark&spin=true&eq_color=FF2D95"
            alt="Voxxai's currently playing Spotify track"
            width="495" height="135" referrerPolicy="no-referrer"
            onError={() => setFailed(true)}
          />
        )}
      </a>
      <button type="button" className="button button-secondary"
        onClick={() => setEnabled(false)}>
        Hide music widget
      </button>
      <p className="widget-privacy">
        Hiding stops displaying external content; it cannot undo requests already sent.
      </p>
    </div>
  );
}
