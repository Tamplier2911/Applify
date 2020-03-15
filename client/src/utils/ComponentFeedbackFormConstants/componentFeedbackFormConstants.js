const feedbackFormData = {
  eng: {
    feedbackFormTitle: [
      "Please, describe what did you like about my services, and what you didn't.",
      "How could I improve?"
    ],
    feedbackFormFeedback: "Feedback",
    feedbackFormSubmit: "Submit",
    options: [
      { name: "Awful", value: "1" },
      { name: "Could be better...", value: "2" },
      { name: "Good enough", value: "3" },
      { name: "Meet expectations", value: "4" },
      { name: "Unforgettable", value: "5" }
    ]
  },
  rus: {
    feedbackFormTitle: [
      "Поделитесь вашим опытом использования моих услуг.",
      "Над чем стоит поработать?"
    ],
    feedbackFormFeedback: "Отзыв",
    feedbackFormSubmit: "Разместить",
    options: [
      { name: "Ужасно", value: "1" },
      { name: "Могло быть лучше...", value: "2" },
      { name: "Достаточно хорошо", value: "3" },
      { name: "Оправдывает ожидания", value: "4" },
      { name: "Незабываемо", value: "5" }
    ]
  },
  ukr: {
    feedbackFormTitle: [
      "Поділіться вашим досвідом використання моїх послуг.",
      "Над чим варто попрацювати?"
    ],
    feedbackFormFeedback: "Відгук",
    feedbackFormSubmit: "Розмістити",
    options: [
      { name: "Жахливо", value: "1" },
      { name: "Могло бути краще...", value: "2" },
      { name: "Достатньо добре", value: "3" },
      { name: "Виправдовує очікування", value: "4" },
      { name: "Незабутньо", value: "5" }
    ]
  }
};

export default feedbackFormData;