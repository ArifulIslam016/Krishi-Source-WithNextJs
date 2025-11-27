// postcss.config.mjs
const postcssConfig = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {}, // ✅ handles @property and other modern CSS
  },
};

export default postcssConfig;
