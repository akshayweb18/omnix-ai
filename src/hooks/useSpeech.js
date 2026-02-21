"use client";
import { useState, useEffect, useCallback } from "react";

export function useSpeech() {
  const [voices, setVoices] = useState([]);
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadVoices = () => {
      const allVoices = window.speechSynthesis.getVoices();
      setVoices(allVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Detect language based on unicode ranges
  const detectLanguage = (text) => {
    if (/[\u0900-\u097F]/.test(text)) return "hi-IN"; // Hindi
    if (/[\u0B80-\u0BFF]/.test(text)) return "ta-IN"; // Tamil
    if (/[\u0C00-\u0C7F]/.test(text)) return "te-IN"; // Telugu
    if (/[\u0A00-\u0A7F]/.test(text)) return "gu-IN"; // Gujarati
    if (/[\u0C80-\u0CFF]/.test(text)) return "kn-IN"; // Kannada
    if (/[\u0D00-\u0D7F]/.test(text)) return "ml-IN"; // Malayalam
    return "en-IN"; // Default English
  };

  const getBestFemaleVoice = (lang) => {
    const femaleVoice =
      voices.find(
        (v) =>
          v.lang.includes(lang.split("-")[0]) &&
          /female|zira|google|wavenet/i.test(v.name)
      ) ||
      voices.find((v) => v.lang.includes(lang.split("-")[0])) ||
      voices[0];

    return femaleVoice;
  };

  const speak = useCallback(
    (text, forcedLang = null) => {
      if (!text) return;

      window.speechSynthesis.cancel();

      const lang = forcedLang || detectLanguage(text);
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = getBestFemaleVoice(lang);

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      }

      utterance.rate = 0.9;
      utterance.pitch = 1.2;
      utterance.volume = 1;

      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [voices]
  );

  return { speak, detectLanguage, speaking };
}