export const loginService = async (email, password) => {
  let url = "https://eventos.ec/api/login?email=admin@admin.com&password=";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  try {
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
