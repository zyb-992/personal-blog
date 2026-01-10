export default function AboutPage() {
    return (
        <section className="py-8 space-y-8">
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Me
                </h1>
                <p className="text-muted-foreground text-lg">
                    I'm a software engineer passionate about building minimalist, high-performance web applications.
                </p>
            </div>
            <div className="prose prose-zinc dark:prose-invert max-w-none">
                <p>
                    This blog is a place where I share my thoughts on programming, technology, and minimalism.
                    It's built with Next.js 15, Tailwind CSS, and is deployed on Cloudflare Pages.
                </p>
                <h2>Technical Stack</h2>
                <ul>
                    <li><strong>Framework</strong>: Next.js 15 (App Router)</li>
                    <li><strong>Styling</strong>: Tailwind CSS 4</li>
                    <li><strong>Content</strong>: Markdown/MDX</li>
                    <li><strong>Deployment</strong>: Cloudflare Pages</li>
                </ul>
                <p>
                    Feel free to reach out to me on <a href="https://github.com/zyb-992" target="_blank" rel="noreferrer">GitHub</a>.
                </p>
            </div>
        </section>
    );
}
