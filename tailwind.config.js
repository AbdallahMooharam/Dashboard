/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // أو 'media' لتفضيل مستوى نظام التشغيل
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4A90E2', // لون رئيسي
        'secondary': '#D0021B', // لون ثانوي
        'dark-background': '#1F1F1F', // خلفية الوضع المظلم
        'light-background': '#F9F9F9', // خلفية الوضع الفاتح
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif'], // الخطوط السان
        'serif': ['Georgia', 'serif'], // الخطوط السيريف
      },
      // يمكنك إضافة المزيد من التمديدات هنا إذا لزم الأمر
    },
  },
  plugins: [],
}
