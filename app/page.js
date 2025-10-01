// app/page.js
import { fetchAPI } from "@/lib/api"; // pastikan kamu buat lib/api.js

export default async function HomePage() {
  // Panggil API Strapi
  const { data: articles } = await fetchAPI("/articles");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Daftar Artikel dari Strapi</h1>
      <ul className="space-y-2">
        {articles.map((article) => (
          <li key={article.id} className="p-3 border rounded">
            {article.attributes.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
