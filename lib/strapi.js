import { PROD_URL, PROD_BLOGS_URL } from "../app/config";

export async function createUser({ username, email, password }) {
  if (username === "" || email === "" || password == "") {
    throw new Error("All fields should be completed");
  }
  const body = JSON.stringify({ username, email, password });
  try {
    const res = await fetch(`${PROD_URL}auth/local/register`, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: body,
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const user = await res.json();
    return user;
  } catch (error) {
    console.log("ERROR CREATING USER", error);
    throw Error(error);
  }
}
