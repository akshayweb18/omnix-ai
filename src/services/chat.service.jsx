export const sendMessageToAI = async (prompt) => {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: prompt }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Failed to get AI response");

  return data.reply;
};