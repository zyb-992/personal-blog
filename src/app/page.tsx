import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <section className="space-y-12 py-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Latest Posts
        </h1>
        <p className="text-muted-foreground text-lg">
          Insights, tips, and articles about programming and technology.
        </p>
      </div>
      <div className="grid gap-10">
        {posts.map((post) => (
          <article key={post.slug} className="group relative flex flex-col space-y-2">
            <div className="flex flex-col space-y-1">
              <span className="text-sm text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <h2 className="text-2xl font-bold tracking-tight">
                <Link href={`/posts/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
            </div>
            {post.description && (
              <p className="text-muted-foreground line-clamp-2">
                {post.description}
              </p>
            )}
            <div className="flex items-center gap-2 pt-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-muted-foreground/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

