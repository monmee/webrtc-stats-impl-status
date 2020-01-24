const arrayToMarkdownTable = arr => {
  const [head, ...body] = arr;
  const tokens = [
    ["", ...head, ""],
  ];

  tokens.push(["", "---:", ...new Array(head.length - 1).fill().map(() => ":--:"), ""]);

  for (const item of body) {
    const [type, ...rest] = item;
    const implOrNot = rest.map(bool => bool ? "✅" : "");
    tokens.push(["", type, ...implOrNot, ""]);
  }

  return tokens.map(row => row.join(" | ").trim()).join("\n");
};

const renderMarkdown = (title, table) => {
  console.log(title);
  console.log("");
  console.log(table);
  console.log("");
};

module.exports = {
  arrayToMarkdownTable,
  renderMarkdown
};
