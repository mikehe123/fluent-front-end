export default async function InitPrompt(readingLevel) {
  const rawResponse = await fetch("http://127.0.0.1:5000/story/new", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      initial_prompt: "Joe the girafee",
      reading_level: readingLevel,
    }),
  });
  const content = await rawResponse.json();

  return content;
}
