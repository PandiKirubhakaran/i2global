export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning Dear";
  if (hour < 18) return "Good Afternoon Dear";
  return "Good Evening Dear";
}
