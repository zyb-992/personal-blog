import { getPostBySlug, getPostSlugs } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx?$/, ""),
    }));
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params;

    try {
        const post = getPostBySlug(slug);

        return (
            <article className="py-8 space-y-8">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                    ← Back to Posts
                </Link>
                <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                            })}
                        </time>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-muted-foreground/10"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
                <hr className="border-muted" />
                <div className="prose prose-zinc dark:prose-invert max-w-none">
                    <MDXRemote source={post.content} />
                </div>
            </article>
        );
    } catch (error) {
        console.error(error);
        notFound();
    }
}
