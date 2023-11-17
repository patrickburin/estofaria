const size = {
  mobile: "414px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
  desktopL: "1869px",
  desktopXL: "1870px",
};

export const device = {
  //telas menores que 414px
  mobile: `(max-width: ${size.mobile})`,

  //telas maiores que 414px e menores que 768px
  tablet: `(max-width: ${size.tablet})`,

  //telas maiores que 768px e menores que 1024px
  laptop: `(max-width: ${size.laptop})`,

  //telas maiores que 1024px e menores que 1280px
  desktop: `(max-width: ${size.desktop})`,

  //Telas maiores de 1869px
  desktopL: `(max-width: ${size.desktopL})`,

  //Telas maiores de 1920px
  desktopXL: `(min-width: ${size.desktopXL})`,
};
