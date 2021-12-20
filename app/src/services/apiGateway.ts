export function login(username: string, password: string) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  };
  const url =
    process.env.NODE_ENV === "development"
      ? `${document.location.protocol}//${document.location.hostname}:8080/login`
      : `${document.location.origin}/login`;
  return fetch(url, config).then((res) => res.json());
}
