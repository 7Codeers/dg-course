/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"hero-pattern": "url('/public/img/Ellipos.png')",
				"footer-texture": "url('/img/footer-texture.png')",
			},
			keyframes: {
				rotating_text: {
					"0%": { transform: "translateX(0deg)" },
					"50%": { transform: "translateX(180deg) " },
					"100%": { transform: "translateX(0deg)" },
				},
				wiggle: {
					"0%, 100%": { transform: "rotateY(0deg)" },
					"50%": { transform: "rotateY(-180deg)" },
				},
			},
			animation: {
				"spin-slow": "wiggle 3s 1 linear",
			},
			fontFamily: {
				vazirmatnThin: "vazirmatnThin",
				vazirmatnExLight: "vazirmatnExLight",
				vazirmatnLight: "vazirmatnLight",
				vazirmatn: "vazirmatn",
				vazirmatnMedium: "vazirmatnMedium",
				vazirmatnSemiB: "vazirmatnSemiB",
				vazirmatnBold: "vazirmatnBold",
				vazirmatnExB: "vazirmatnExB",
			},

		},
	},
	plugins: [],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#5A0BA9",
        "btn-purple": "#67008F",
        grey: "#707070",
        "light-gray": "#a6a6a6",
        green: "#58AD57",
        lightgrey: "#f2f2f2",
        white: "#ffffff",
        "light-purple": "#C200BC",
        "green-btn": "#36C54E",
        "input-purple": "#9F0099",
        "link-blue": "#564FCC",
      },
      spacing: {
        106: "25rem",
      },
      fontFamily: {
        vazirmatnThin: "vazirmatnThin",
        vazirmatnExLight: "vazirmatnExLight",
        vazirmatnLight: "vazirmatnLight",
        vazirmatn: "vazirmatn",
        vazirmatnMedium: "vazirmatnMedium",
        vazirmatnSemiB: "vazirmatnSemiB",
        vazirmatnBold: "vazirmatnBold",
        vazirmatnExB: "vazirmatnExB",
        shabnam: "shabnam",
        shabnamBold: "shabnamBold",
      },
      boxShadow: {
        "3xl": "0  0 6px 1px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
