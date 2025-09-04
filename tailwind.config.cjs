/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}",
  ],
  plugins: [],
  safelist: [
    'bg-white',
    'text-gray-900',
    'text-gray-800',
    'text-gray-600',
    'text-4xl',
    'text-3xl',
    'text-2xl',
    'text-lg',
    'font-bold',
    'min-h-screen',
    'flex',
    'flex-col',
    'flex-grow',
    'container',
    'mx-auto',
    'max-w-6xl',
    'py-16',
    'px-30',
    'mb-6',
    'leading-relaxed'
  ],
}