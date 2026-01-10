import Link from "next/link";
import { Github } from "lucide-react";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-4xl mx-auto flex h-14 items-center justify-between px-4">
                <div className="flex items-center gap-4">
                    <Link href="/" className="font-semibold tracking-tight text-lg">
                        Minimalist
                    </Link>
                    <nav className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Link href="/" className="transition-colors hover:text-foreground">
                            Posts
                        </Link>
                        <Link href="/about" className="transition-colors hover:text-foreground">
                            About
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com/zhengyb"
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}
