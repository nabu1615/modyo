module.exports = {
  title: "Modyo Style Guide",
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap ",
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"DM Sans", sans-serif',
      fontSize: '62.5%'
    },
  },
  components: "src/components/**/[A-Z]*.js",
};
