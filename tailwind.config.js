module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Institutional trust and reliability foundation
        primary: {
          50: "#EFF6FF", // blue-50
          100: "#DBEAFE", // blue-100
          200: "#BFDBFE", // blue-200
          300: "#93C5FD", // blue-300
          400: "#60A5FA", // blue-400
          500: "#3B82F6", // blue-500
          600: "#2563EB", // blue-600
          700: "#1D4ED8", // blue-700
          800: "#1E40AF", // blue-800
          900: "#1E3A8A", // blue-900
          DEFAULT: "#2563EB", // blue-600
        },
        // Secondary Colors - Growth and practical wisdom accent
        secondary: {
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          200: "#A7F3D0", // emerald-200
          300: "#6EE7B7", // emerald-300
          400: "#34D399", // emerald-400
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
          800: "#065F46", // emerald-800
          900: "#064E3B", // emerald-900
          DEFAULT: "#059669", // emerald-600
        },
        // Accent Colors - Achievement highlights and call-to-action energy
        accent: {
          50: "#FFF7ED", // orange-50
          100: "#FFEDD5", // orange-100
          200: "#FED7AA", // orange-200
          300: "#FDBA74", // orange-300
          400: "#FB923C", // orange-400
          500: "#F97316", // orange-500
          600: "#EA580C", // orange-600
          700: "#C2410C", // orange-700
          800: "#9A3412", // orange-800
          900: "#7C2D12", // orange-900
          DEFAULT: "#EA580C", // orange-600
        },
        // Background and Surface Colors
        background: "#F8FAFC", // slate-50
        surface: "#F1F5F9", // slate-100
        // Text Colors
        "text-primary": "#1E293B", // slate-800
        "text-secondary": "#64748B", // slate-500
        // Status Colors
        success: "#10B981", // emerald-500
        warning: "#F59E0B", // amber-500
        error: "#EF4444", // red-500
        // Extended Gray Palette
        gray: {
          50: "#F8FAFC", // slate-50
          100: "#F1F5F9", // slate-100
          200: "#E2E8F0", // slate-200
          300: "#CBD5E1", // slate-300
          400: "#94A3B8", // slate-400
          500: "#64748B", // slate-500
          600: "#475569", // slate-600
          700: "#334155", // slate-700
          800: "#1E293B", // slate-800
          900: "#0F172A", // slate-900
        },
      },
      fontFamily: {
        // Headlines: Inter (400, 600, 700)
        inter: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        // Body: Source Sans Pro (400, 600)
        'source-sans': ['Source Sans Pro', 'sans-serif'],
        body: ['Source Sans Pro', 'sans-serif'],
        // CTAs: Inter (600)
        cta: ['Inter', 'sans-serif'],
        // Accents: Poppins (500)
        poppins: ['Poppins', 'sans-serif'],
        accent: ['Poppins', 'sans-serif'],
        // Default sans fallback
        sans: ['Source Sans Pro', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'custom-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}