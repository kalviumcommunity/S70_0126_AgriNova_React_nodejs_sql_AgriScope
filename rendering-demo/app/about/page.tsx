export const revalidate = false; // Static Rendering (SSG)

export default function AboutPage() {
  console.log("SSG About page rendered at:", new Date().toISOString());

  return (
    <div>
      <h1>About Page</h1>
      <p>This page is statically generated at build time.</p>
    </div>
  );
}
