export const dynamic = 'force-dynamic'; // Dynamic Rendering (SSR)

export default async function DashboardPage() {
  console.log("SSR Dashboard rendered at:", new Date().toISOString());

  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store',
  });
  const data = await res.json();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{data.title}</p>
    </div>
  );
}
