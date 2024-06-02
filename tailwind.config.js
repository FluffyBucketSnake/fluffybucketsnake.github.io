/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			default: ['Ubuntu', 'ui-sans-serif', 'sans-serif'],
			mono: ['"Fira Code"', 'ui-monospace', 'monospace'],
			header: ['"8-BIT WONDER"', 'ui-sans-serif', 'sans-serif'],
			stylized: ['Pixellari', 'ui-sans-serif', 'sans-serif']
		},
		extend: {
			typograph: { gray: { css: { '--tw-prose-body': '#F00' } } },
			colors: {
				darkest: '#212123',
				lightest: '#f2f0e5',
				fg: '#f2f0e5',
				fgInv: '#212123',
				carbon: '#45444f',
				acrylic: 'rgb(from #212123 r g b / 75%)',
				matte: '#646365',
				separator: '#646365',
				separatorHl: '#868188',
				primary: {
					800: '#352b42',
					600: '#3a3858',
					500: '#43436a',
					400: '#4b80ca',
					200: '#68c2d3',
					fg: '#f2f0e5'
				},
				secondary: {
					200: '#ede19e',
					400: '#c2d368',
					500: '#b2b47e',
					600: '#7b7243',
					800: '#4e584a',
					fg: '#212123'
				},
				success: {
					750: '#352b42',
					500: '#4e584a',
					250: '#567b79',
					fg: '#f2f0e5'
				},
				warning: {
					750: '#a77b5b',
					500: '#d3a068',
					250: '#ede19e',
					fg: '#212123'
				},
				danger: {
					750: '#4b4158',
					500: '#80493a',
					250: '#b45252',
					fg: '#f2f0e5'
				}
			},
			backgroundImage: {
				wavy: "url('/assets/img/bg-wavy.png')"
			},
			dropShadow: {
				'2px': '2px 2px #212123',
				'4px': '4px 4px #212123',
				'8px': '8px 8px #212123',
				'16px': '16px 16px #212123',
				'32px': '32px 32px #212123C0'
			},
			boxShadow: {
				'2px': '2px 2px #212123',
				'4px': '4px 4px #212123',
				'8px': '8px 8px #212123',
				'16px': '16px 16px #212123',
				'32px/A': '32px 32px #21212380'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
