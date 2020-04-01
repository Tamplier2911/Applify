const blogCreateRulesData = {
  eng: {
    blogRulesTitles: [
      "Simple rules on how to create a blog, with data to be parsed in right way:",
      "Example:"
    ],
    blogRulesSelectors: ["%BLOCK%", "%H%", "%P%", "%A%", "%L%", "%CODE%"],
    blogRulesDescriptors: [
      "- wrap around every block of content.",
      "- wrap around anything meant to be a header.",
      "- wrap around any paragraph.",
      "- wrap around any anchor tag.",
      "- wrap around any list item.",
      "- wrap around any code snippet."
    ],
    blogRulesCode: [
      "This is a header!",
      "This is some paragraph that mean to be rendered.",
      "https://www.google.com:Google.com",
      "List item - 1",
      "List item - 2",
      "console.log('Hello, world!')"
    ]
  },
  rus: {
    blogRulesTitles: [
      "Простые правила - как создать блог с данными, для правильного анализа:",
      "Образец:"
    ],
    blogRulesSelectors: ["%BLOCK%", "%H%", "%P%", "%A%", "%L%", "%CODE%"],
    blogRulesDescriptors: [
      "- обернуть вокруг каждого блока контента.",
      "- обернуть все, что должно быть заголовком.",
      "- обернуть любой абзац.",
      "- обернуть вокруг тега привязки.",
      "- обернуть вокруг любого элемента списка.",
      "- обернуть любой фрагмент кода."
    ],
    blogRulesCode: [
      "Это заголовок!",
      "Это какой-то параграф.",
      "https://www.google.com:Google.com",
      "Элемент списка - 1",
      "Элемент списка - 2",
      "console.log('Hello, world!')"
    ]
  },
  ukr: {
    blogRulesTitles: [
      "Прості правила - як створити блог з даними, для правильного аналізу:",
      "Зразок:"
    ],
    blogRulesSelectors: ["%BLOCK%", "%H%", "%P%", "%A%", "%L%", "%CODE%"],
    blogRulesDescriptors: [
      "- обернути навколо кожного блоку контенту.",
      "- обернути все, що повинно бути заголовком.",
      "- обернути абзац.",
      "- обернути навколо тега прив'язки..",
      "- обернути навколо будь-якого елементу списку.",
      "- обернути будь-який фрагмент коду."
    ],
    blogRulesCode: [
      "Це заголовок!",
      "Це якийсь параграф.",
      "https://www.google.com:Google.com",
      "Елементу списку - 1",
      "Елементу списку - 2",
      "console.log('Hello, world!')"
    ]
  }
};

export default blogCreateRulesData;
