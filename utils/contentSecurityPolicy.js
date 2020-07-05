exports.contentSecurityPolicyOpt = {
  directives: {
    // defaultSrc: [
    //   "'self'",
    //   "applify-tech.com",
    //   "applify-s.herokuapp.com",
    //   "fonts.googleapis.com",
    // ],
    scriptSrc: [
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",
      "'sha256-GDUfxAiaE5lVgQ6z2nbmzD2HvviBuHsUsSnoHzDvfdo='",
      "storage.googleapis.com",
      "applify-tech.com",
      "applify-s.herokuapp.com",
    ],
    fontSrc: ["'self'", "fonts.googleapis.com", "fonts.gstatic.com"],
    objectSrc: ["'self'"],
  },
};
