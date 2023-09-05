import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#333", // 연한검정색
          200: "#000", // 진한검정색
          300: "#E00", // 기본빨강색
        },
        Gray: {
          100: "#BFBFBF", // 보더색, 플레이스 홀더 색
          200: "#F7F7F7", // 셀렉트 액티브색
          300: "#737373", // 탭 액티브되지않은 색
          400: "#D9D9D9", // 사이사이 나누는 색
        },
      },
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
