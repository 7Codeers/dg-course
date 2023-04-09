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
};
