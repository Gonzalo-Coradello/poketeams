/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(12rem, 1fr))",
      },
      colors: {
        normal: '#a8a878',
        fire: '#f08030',
        water: '#6890f0',
        grass: '#78c850',
        electric: '#f8d030',
        ice: '#98d8d8',
        fighting: '#c03028',
        poison: '#a040a0',
        ground: '#e0c068',
        flying: '#a890f0',
        psychic: '#f85888',
        bug: '#a8b820',
        rock: '#b8a038',
        ghost: '#705898',
        dark: '#705848',
        dragon: '#7038f8',
        steel: '#b8b8d0',
        fairy: '#f0b6bc'
      },
    },
  },
  plugins: [],
  safelist: [ "bg-normal", "bg-fire", "bg-water", "bg-grass", "bg-electric", "bg-ice", "bg-fighting", "bg-poison", "bg-ground", "bg-flying", "bg-psychic", "bg-bug", "bg-rock", "bg-ghost", "bg-dark", "bg-dragon", "bg-steel", "bg-fairy", "text-fire", "border-fire", "text-grass", "border-grass", "text-water", "border-water" ]
}
