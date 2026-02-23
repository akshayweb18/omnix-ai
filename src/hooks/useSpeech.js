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

  // 🌍 Language Detection
  const detectLanguage = (text) => {
    if (/[\u0900-\u097F]/.test(text)) return "hi-IN";
    if (/[\u0B80-\u0BFF]/.test(text)) return "ta-IN";
    if (/[\u0C00-\u0C7F]/.test(text)) return "te-IN";
    if (/[\u0A00-\u0A7F]/.test(text)) return "gu-IN";
    if (/[\u0C80-\u0CFF]/.test(text)) return "kn-IN";
    if (/[\u0D00-\u0D7F]/.test(text)) return "ml-IN";
    return "en-IN";
  };

  // 🧹 Clean Text (removes # . markdown emoji etc)
  const cleanTextForSpeech = (text) => {
    if (!text) return "";

    return text
      .replace(/[#*_~`>]/g, "") // remove markdown
      .replace(/https?:\/\/\S+/g, "") // remove URLs
      .replace(/[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu, "")
      .replace(/\.{2,}/g, ".")
      .replace(/\s+/g, " ")
      .trim();
  };

  // 👩 Best Female Voice Selector
  const getBestFemaleVoice = (lang) => {
    const langCode = lang.split("-")[0];

    const googleVoice = voices.find(
      (v) =>
        v.lang.startsWith(langCode) &&
        /google/i.test(v.name)
    );

    if (googleVoice) return googleVoice;

    const femaleVoice = voices.find(
      (v) =>
        v.lang.startsWith(langCode) &&
        /female|zira|heera|kalpana|priya/i.test(v.name)
    );

    if (femaleVoice) return femaleVoice;

    return voices.find((v) => v.lang.startsWith(langCode)) || voices[0];
  };

  // 🔊 Speak Function
  const speak = useCallback(
    (rawText, forcedLang = null) => {
      if (!rawText) return;

      const text = cleanTextForSpeech(rawText);
      if (!text) return;

      window.speechSynthesis.cancel();

      const lang = forcedLang || detectLanguage(text);
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = getBestFemaleVoice(lang);

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      }

      utterance.rate = 0.95;
      utterance.pitch = 1.15;
      utterance.volume = 1;

      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [voices]
  );

  return { speak, speaking };
}