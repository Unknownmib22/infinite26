import { useEffect, useState } from "react";
import introVideo from "../assets/intro.mp4";

function IntroAnimation({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const hasPlayed = localStorage.getItem("infinite26_intro_played");

    if (hasPlayed === "true") {
      setVisible(false);
      onComplete();
    }
  }, [onComplete]);

  const finishIntro = () => {
    localStorage.setItem("infinite26_intro_played", "true");
    setVisible(false);
    onComplete();
  };

  if (!visible) return null;

  return (
    <div className="intro-screen">
      <video
        className="intro-video"
        src={introVideo}
        autoPlay
        muted
        playsInline
        onEnded={finishIntro}
      />

      <button className="intro-skip" onClick={finishIntro}>
        ENTER INFINITE'26
      </button>
    </div>
  );
}

export default IntroAnimation;