/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss");

module.exports = {
	content: ["./src/**/*.njk"],
	theme: {
		screens: {
			"2xl": { max: "1535px" },
			xl: { max: "1279px" },
			lg: { max: "1090px" },
			md: { max: "860px" },
			sm: { max: "680px" },
			ph: { max: "539px" },
		},
		extend: {
			colors: {
				graphite: "#1a1a1a",
				"graphite-hover": "#2c2c2c",
				"ice-main": "#f1f1f1",
				"ice-secondary": "#BCBCBC",
				code: {
					green: "#B8BB24",
					cyan: "#83A598",
					red: "#fb4934",
				},
				emphasis: "#EBB731",
			},
			height: {
				"first-screen": "calc(100vh - 4rem)",
				"welcome-normal":
					"calc(theme(fontSize.8xl)*theme(lineHeight.tight))",
				"welcome-xl":
					"calc(theme(fontSize.7xl)*theme(lineHeight.tight))",
				"welcome-md":
					"calc(theme(fontSize.9xl)*theme(lineHeight.tight))",
				"welcome-phone":
					"calc(theme(fontSize.6xl)*theme(lineHeight.tight))",
			},
			gridTemplateColumns: {
				lang: "1fr 2fr",
				"lang-small": "2fr 1fr",
			},
			gridTemplateRows: {
				phone: "2fr 1fr",
			},
			animation: {
				"text-slide":
					"text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
			},
			keyframes: {
				"text-slide": {
					"0%, 20%": {
						transform: "translateY(0%)",
					},
					"25%, 45%": {
						transform: "translateY(-20%)",
					},
					"50%, 70%": {
						transform: "translateY(-40%)",
					},
					"75%, 95%": {
						transform: "translateY(-60%)",
					},
					"100%": {
						transform: "translateY(-80%)",
					},
				},
			},
		},
	},
	plugins: [
		plugin(
			function ({ addVariant }) {
				addVariant("glow", ".glow-capture .glow-overlay &");
			},
			{
				theme: {
					extend: {
						colors: {
							glow: "color-mix(in srgb, red calc(<alpha-value> * 100%), transparent)",
						},
					},
				},
			},
		),
	],
};
