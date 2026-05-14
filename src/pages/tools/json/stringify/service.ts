export const stringifyJson = (
  input: string,
  indentationType: 'tab' | 'space',
  spacesCount: number,
  escapeHtml: boolean
): string => {
  let parsedInput;
  try {
    // Safely evaluate the input string as JavaScript (indirect eval to avoid bundler issues)
    parsedInput = (0, eval)('(' + input + ')');
  } catch (_e) {
    throw new Error('Invalid JavaScript object/array');
  }

  const indent = indentationType === 'tab' ? '\t' : ' '.repeat(spacesCount);
  let result = JSON.stringify(parsedInput, null, indent);

  if (escapeHtml) {
    result = result
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  return result;
};
