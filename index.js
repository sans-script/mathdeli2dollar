function mathdeli2dollar(text) {
  text = text.replace(/\\\[\s*([\s\S]*?)\s*\\\]/g, (match, p1) => {
    return `$$\n${p1.trim()}\n$$`;
  });
  text = text.replace(/\\\(\s*([\s\S]*?)\s*\\\)/g, (match, p1) => {
    return `$${p1.trim()}$`;
  });

  return text;
}

export default mathdeli2dollar;
