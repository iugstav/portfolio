/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.njk"],
	theme: {
		extend: {
			colors: {
				graphite: "#1a1a1a",
				"graphite-hover": "#2c2c2c",
				"ice-main": "#f1f1f1",
				"ice-secondary": "#BCBCBC",
				"code-green": "#B8BB24",
				"code-cyan": "#83A598",
				"code-red": "#fb4934",
				"emphasis": "#EBB731"
			},
			height: {
				"first-screen": "calc(100vh - 4rem)",
			},
      animation: {
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
			keyframes: {
				"text-slide": {
					"0%, 16%": {
						transform: "translateY(0%)",
					},
					"20%, 36%": {
						transform: "translateY(-16.66%)",
					},
					"40%, 56%": {
						transform: "translateY(-33.33%)",
					},
					"60%, 76%": {
						transform: "translateY(-50%)",
					},
					"80%, 96%": {
						transform: "translateY(-66.66%)",
					},
					"100%": {
						transform: "translateY(-83.33%)",
					},
				},
			},
		},
	},
	plugins: [],
};
