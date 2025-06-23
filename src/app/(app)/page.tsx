export default async function Home() {
  return (
    <div className="container px-10 mt-10 mx-auto font-sans">
      <h2 className="text-xl font-semibold mb-10">
        🔧 All-in-One React Vite Starter Kit A powerful, modern starter repository for building React-based projects
        with the best and most essential tools and libraries in the ecosystem.
      </h2>{" "}
      <p>This setup is designed to boost productivity, ensure scalability, and follow best practices.</p>
      <h3 className="mt-8 text-xl">Tech Stack Included</h3>
      <ul className="mt-4 flex flex-col gap-3 mb-6">
        <li> ⚛️ React</li>
        <li>⚡ Vite </li>
        <li>🧠 TypeScript </li>
        <li>🔄 React Query</li>
        <li>📝 React Hook Form</li>
        <li>💨 Tailwind CSS</li>
        <li>🎨 shadcn/ui (Radix + Tailwind components)</li>
      </ul>
      And more essential tools... Whether youre building a personal project or a production-grade application, this
      starter kit gives you a rock-solid foundation to hit the ground running.
    </div>
  );
}
