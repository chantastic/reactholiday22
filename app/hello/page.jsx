import { notFound } from "next/navigation";

async function fetchUser(id) {
  let req = await fetch("https://httpstat.us/404");
  if (!req.ok) {
    // throw Error("Failed to fetch.");
    return undefined;
  }
  return await req.json();
}
export default async function HelloPage() {
  let user = await fetchUser();
  if (!user) {
    notFound();
  }

  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  return <p>Hello {data.name}!</p>;
}
