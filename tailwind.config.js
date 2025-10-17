/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				primaryGradientStart: "#6E1FC7",
				primaryGradientMid: "#D136DF",
				primaryGradientEnd: "#19A7CE",
				primary: "#6E33B1",
			},
			keyframes: {
				pulseGlow: {
					"0%, 100%": { boxShadow: "0 0 5px rgba(110, 51, 177, 0.3)" },
					"50%": { boxShadow: "0 0 15px rgba(110, 51, 177, 0.8)" },
				},
			},
			animation: {
				pulseGlow: "pulseGlow 1.5s ease-in-out infinite",
			},
		},
		fontFamily: {
			inter: ["Inter", "sans-serif"],
			poppins: ["Poppins", "sans-serif"],
		},
	},
	plugins: [],
};
