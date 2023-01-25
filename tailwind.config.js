const plugin = require("tailwindcss/plugin");
const { fontFamily } = require('tailwindcss/defaultTheme')


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-myFont)', ...fontFamily.sans],
      },
      transitionDuration: {
        0: '0ms',
        2000: '7000ms'
      },
      fontSize: {
        '1xl': '4.4rem',
        '2xl': '3.3rem',
        '3xl': '2.5rem',
        '4xl': '1.9rem',
        '5xl': '1.5rem',
        '6xl': '1.4rem',
        '7xl': '1.0rem',
        sm: '0.7rem'
      },
      spacing: {
        '25p': '25%',
        '35p': '35%',
        '50p': '50%',
        '75p': '75%',
        '84.5vh': '84.5vh',
        '80vh': '80vh',
        '90vh': '90vh'
      },
      colors: {
        blue: '#232946',
        pink: '#EEBBC3',
        violet: '#B8C1EC',
        white: '#FFFFFE',

        gray: {
          150: "#fdfdfd",
          250: "#24262d",
          550: "#8b9cbe",
          650: "#555e70",
          750: "#343a40",
        },
      },
      animation: {
        changewidth: 'width 2s ease-in-out infinite',
        spin: 'spin 8s linear infinite',
        absoluteright: 'absoluteright 4s ease-in infinite',
        translateright: 'translateright 1.5s ease-in-out infinite'
      },
      boxShadow: {
        'light-xl': '0 15px 30px -15px rgba(256, 256, 256, 0.3)',
        'light-2xl': '-1px 6px 13px 0px rgba(0,0,0,0.44)',
        'light-3xl': '0 25px 60px rgba(255,255,255, 0.1), 0 19px 30px rgba(255,255,255, 0.1)',
        'light-4xl': '0 45px 100px rgba(220,220,220, 0.3), 0 16px 40px rgba(220,220,252205, 0.3)',
        'violet-5xl': '0px 6px 58px -8px rgba(184,193,236,0.36)'
      },
      keyframes: {
        width: {
          '0%, 100%': { width: '20px' },
          '50%': { width: '40%' }
        },
        absoluteright: {
          '0%,100%': {
            right: '0px'
          },
          '50%': {
            right: '-30px'
          }
        },
        translateright: {
          '0%,100%': {
            'margin-left': '0px'
          },
          '50%': {
            'margin-left': '20px'
          }
        }
      }
    }
  },


  plugins: [
    plugin(function ({ addBase, addUtilities, theme }) {
      addBase({
        body: {
          "-webkit-font-smoothing": "subpixel-antialiased",
        },
      });
      require("tailwind-heropatterns")({
        // as per tailwind docs you can pass variants
        variants: [],

        // the list of patterns you want to generate a class for
        // the names must be in kebab-case
        // an empty array will generate all 87 patterns
        patterns: [],

        // The foreground colors of the pattern
        colors: {
          default: "#343a40",
          "blue-dark": "#000044", //also works with rgb(0,0,205)
        },

        // The foreground opacity
        opacity: {
          default: "1.0",
          100: "1.0",
        },
      });
      /**
       * Typography Utilities
       */
      const typographyUtils = {
        ".optimize-legibility": {
          "text-rendering": "optimizeLegibility",
        },
        ".ligatures": {
          "font-variant-ligatures": "common-ligatures",
          "font-feature-settings": "'liga' on, 'clig' on",
        },
        ".kerning": {
          "font-kerning": "normal",
          "font-feature-settings": "'kern' on",
        },
        ".small-caps": {
          "font-variant-caps": "small-caps",
          "font-feature-settings": "'smcp' on",
        },
        ".all-small-caps": {
          "font-variant-caps": "all-small-caps",
          "font-feature-settings": "'c2sc' on, 'smcp' on",
        },
        ".lining-nums": {
          "font-variant-numeric": "lining-nums",
          "font-feature-settings": "'lnum' on",
        },
        ".oldstyle-nums": {
          "font-variant-numeric": "oldstyle-nums",
          "font-feature-settings": "'onum' on",
        },
        ".proportional-nums": {
          "font-variant-numeric": "proportional-nums",
          "font-feature-settings": "'pnum' on",
        },
        ".tabular-nums": {
          "font-variant-numeric": "tabular-nums",
          "font-feature-settings": "'tnum' on",
        },
        ".slashed-zero": {
          "font-variant-numeric": "slashed-zero",
          "font-feature-settings": "'zero' on",
        },
        ".super": {
          "font-variant-position": "super",
          "font-feature-settings": "'sups' on",
        },
        ".sub": {
          "font-variant-position": "sub",
          "font-feature-settings": "'sub' on",
        },
        ".ordinal": {
          "font-variant-position": "ordinal",
          "font-feature-settings": "'ordn' on",
        },
        ".fractions": {
          "font-variant-numeric": "diagonal-fractions",
          "font-feature-settings": "'frac' on",
        },
        ".case-sensitive": {
          "text-transform": "uppercase",
          "font-feature-settings": "'case' on",
        },
        ".hyphens-manual": {
          hyphens: "manual",
        },
      };

      addUtilities(typographyUtils, {
        variants: ["responsive"],
      });

      /**
       * Project Specific Utilities
       */
      const projectSpecificUtils = {
        ".border-inset": {
          "box-shadow": `inset 0 0 0 1px ${theme("colors.gray.400")}`,
        },
      };

      addUtilities(projectSpecificUtils, {
        variants: ["responsive"],
      });

      /**
       * CSS Multi-Column Layout Utilities
       */
      const columnUtils = {
        ".col-count-1": {
          "column-count": "1",
        },
        ".col-count-2": {
          "column-count": "2",
        },
        ".col-count-3": {
          "column-count": "3",
        },
        ".col-gap-md": {
          "column-gap": "2.1875rem",
        },
        ".break-after-col": {
          "break-after": "column",
        },
        ".break-inside-avoid": {
          "break-inside": "avoid",
        },
        ".break-after-avoid": {
          "break-after": "avoid",
        },
        ".break-before-avoid": {
          "break-after": "avoid",
        },
        ".col-fill-auto": {
          "column-fill": "auto",
        },
        ".col-fill-balance": {
          "column-fill": "balance",
        },
      };

      addUtilities(columnUtils, {
        variants: ["responsive"],
      });
    }),
  ],
};


