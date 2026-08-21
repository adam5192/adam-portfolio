// runs synchronously in head before the browser paints anything
// without this you get a white flash before dark mode kicks in
export function ThemeScript() {
  const script = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || (systemDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
      } catch (e) {}
    })();
  `;

  // react escapes strings by default so you have to opt out to inject raw html
  // safe here because we wrote the string, never put user input in it
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
