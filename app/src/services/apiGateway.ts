export function login(email: string, password: string) {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };
  const url =
    process.env.NODE_ENV === "development"
      ? `${document.location.protocol}//${document.location.hostname}:8081/login`
      : `${document.location.origin}/login`;
  return fetch(url, config).then((res) => res.json());
}
