export const minifyJson = (text: string) => {
  let parsedJson;
  try {
    parsedJson = JSON.parse(text);
  } catch (_e) {
    throw new Error('Invalid JSON string');
  }

  return JSON.stringify(parsedJson);
};
