export const revalidate = 60; // Hybrid Rendering (ISR)

export default async function PricesPage() {
  console.log("ISR Prices page rendered at:", new Date().toISOString());

  const res = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const data = await res.json();

  return (
    <div>
      <h1>Prices Page</h1>
      <p>{data.title}</p>
      <p>Revalidates every 60 seconds</p>
    </div>
  );
}
