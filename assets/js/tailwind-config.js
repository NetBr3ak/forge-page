/**
 * Tailwind CSS Configuration
 * Optimized for production use with CDN.
 * 
 * Note: For a full production environment, it is recommended to use the Tailwind CLI
 * to generate a minified CSS file instead of using the CDN.
 */
tailwind.config = {
	darkMode: 'class', // Allows manual control of dark mode if needed
	theme: {
		container: {
			center: true,
			padding: '1rem',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
		extend: {
			colors: {
				'forge-black': '#000000',
				'forge-dark': '#050505',
				'forge-card': 'rgba(10, 10, 10, 0.8)',
				'forge-border': '#333333',
				'forge-text': '#F0F0F0',
				'forge-muted': '#888888',
				'forge-accent': '#FFFFFF',
				'forge-accent-hover': '#CCCCCC',
				'forge-success': '#00FF00',
			},
			fontFamily: {
				'mono': ['IBM Plex Mono', 'monospace'],
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			letterSpacing: {
				'tightest': '-0.05em',
				'widest': '0.3em',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			animation: {
				'fade-in': 'fadeIn 0.5s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				}
			}
		}
	}
}
