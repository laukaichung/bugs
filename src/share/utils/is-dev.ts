export function isDev(): boolean {
  return process.env.NODE_ENV != "production" && !isTesting();
}

export function isTesting(): boolean {
  return process.env.testing === "true";
}
