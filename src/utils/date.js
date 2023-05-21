export function diffDate(date) {
  const diffYears = Math.floor(
    new Date().getFullYear() - new Date(date).getFullYear()
  );
  const diffMonths = Math.floor(
    new Date().getMonth() - new Date(date).getMonth()
  );
  const diffDays = Math.floor(new Date().getDay() - new Date(date).getDay());
  const diffHours = Math.abs(
    Math.floor(new Date().getHours() - new Date(date).getHours())
  );
  const diffMinutes = Math.abs(
    Math.floor(new Date().getMinutes() - new Date(date).getMinutes())
  );
  const diffSeconds = Math.abs(
    Math.floor(new Date().getSeconds() - new Date(date).getSeconds())
  );

  if (diffYears > 0) {
    return `${diffYears} years ago`;
  }

  if (diffMonths > 0) {
    return `${diffMonths} months ago`;
  }

  if (diffDays > 0) {
    return `${diffDays} days ago`;
  }

  if (diffHours > 0) {
    return `${diffHours} hours ago`;
  }

  if (diffMinutes > 0) {
    return `${diffMinutes} minutes ago`;
  }

  return `${diffSeconds} seconds ago`;
}
