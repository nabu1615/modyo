module.exports = {
  title: "Modyo Style Guide",
  template: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;500;700;900&display=swap",
        },
      ],
    },
  },
  theme: {
    fontFamily: {
      base: '"Montserrat", sans-serif',
      fontSize: '62.5%'
    },
  },
  components: "src/components/**/[A-Z]*.js",
};
