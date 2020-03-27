export const simpleUserSearch = (arr, searchQuery = "") =>
  arr.filter(
    obj =>
      obj.name.toLowerCase().includes(searchQuery) ||
      obj.email.toLowerCase().includes(searchQuery) ||
      obj.role.toLowerCase().includes(searchQuery) ||
      obj.about.toLowerCase().includes(searchQuery)
  );

export const simpleFeedbacksSearch = (arr, searchQuery = "") =>
  arr.filter(
    obj =>
      obj.rating.toLowerCase().includes(searchQuery) ||
      obj.feedback.toLowerCase().includes(searchQuery) ||
      (obj.user
        ? obj.user.name.toLowerCase().includes(searchQuery)
        : obj.createdAt.toLowerCase().includes(searchQuery))
  );

export const simpleMessageSearch = (arr, searchQuery = "") =>
  arr.filter(
    obj =>
      obj.name.toLowerCase().includes(searchQuery) ||
      obj.email.toLowerCase().includes(searchQuery) ||
      obj.message.toLowerCase().includes(searchQuery)
  );

export const simpleBlogsSearch = (arr, searchQuery) =>
  arr.filter(
    obj =>
      obj.title.toLowerCase().includes(searchQuery) ||
      obj.theme.toLowerCase().includes(searchQuery) ||
      obj.content.toLowerCase().includes(searchQuery)
  );
