import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content');

export type Post = {
    slug: string;
    title: string;
    date: string;
    tags: string[];
    description: string;
    content: string;
};

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    return fs.readdirSync(postsDirectory).filter(file => /\.mdx?$/.test(file));
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.mdx?$/, '');
    let fullPath = path.join(postsDirectory, `${realSlug}.md`);

    if (!fs.existsSync(fullPath)) {
        fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        title: data.title,
        date: data.date,
        tags: data.tags || [],
        description: data.description || '',
        content,
    };
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
