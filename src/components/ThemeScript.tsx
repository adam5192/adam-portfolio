// this component helps smooth the transition when switching between themes

export function ThemeScript() {
  const script = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        // matchMedia asks the OS what the users system preference is.
        // .matches is a boolean.
        var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        // explicit choice wins; otherwise fall back to the OS setting.
        var theme = stored || (systemDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {
        // localStorage throws in private mode / if cookies are blocked.
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
