const themeButton = document.getElementById('theme-button');

themeButton.addEventListener('click', async (event) => {
  // Check if the theme is dark
  const isDark = document.documentElement.classList.contains('dark');
  const setNewTheme = () => document.documentElement.classList.toggle('dark', !isDark);

  // Check if the browser supports view transitions
  if (!('startViewTransition' in document) || !(document.startViewTransition instanceof Function)) {
    return setNewTheme();
  }

  // Get the center of the button
  const rect = event.currentTarget.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;

  // Get the hypotenuse of the triangle formed by the button and the corners of the screen
  const hypot = Math.hypot(Math.max(x, width - x), Math.max(y, height - y));

  const startX = x;
  const startY = y;

  // Generate the animation keyframes based on the screen size
  const clipPath = [
    `circle(0px at ${startX}px ${startY}px)`,
    `circle(${hypot}px at ${startX}px ${startY}px)`,
  ];

  await document.startViewTransition(setNewTheme).ready;

  // Animate the view transition
  document.documentElement.animate(
    { clipPath },
    {
      duration: 500,
      easing: 'ease-out',
      pseudoElement: `::view-transition-new(root)`,
    },
  );
});
