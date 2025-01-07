"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

function TypingAnimation() {
  var sentence = ["Fork", "Commit", "Push", "Pull", "Merge", "Repeat !"];
  //   var words = sentence.split(" ");
  return (
    <span className="text-red-500">
      <Typewriter
        words={sentence}
        loop={0}
        cursor={true}
        typeSpeed={100}
        delaySpeed={700}
        deleteSpeed={50}
        cursorStyle="_"
      />
    </span>
  );
}

export default TypingAnimation;
