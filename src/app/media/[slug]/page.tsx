import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import Badge from "@/components/ui/Badge";
import { getBlogBySlug, getBlogs } from "@/lib/api";

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) return { title: "Story Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function MediaArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [post, posts] = await Promise.all([getBlogBySlug(slug), getBlogs()]);
  if (!post) notFound();

  const currentIndex = posts.findIndex((item) => item.slug === post.slug);
  const nextPost = posts[(currentIndex + 1) % posts.length];
  const date = new Date(post.date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <section className="bg-[#0B0D0E] pb-16 pt-32 md:pb-24 md:pt-44">
        <div className="container-fluid">
          <Link href="/media" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-[#A5A5A0] transition-colors hover:text-[#C8A45D]">
            <ArrowLeft className="size-4" aria-hidden />
            Back to Media
          </Link>
          <div className="mt-12 max-w-4xl">
            <Badge tone="gold">{post.category}</Badge>
            <h1 className="mt-6 text-[clamp(2.3rem,6vw,5rem)] font-semibold leading-[1.04] tracking-tight text-[#F4F1EA]">{post.title}</h1>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] text-[#A5A5A0]">
              <span>{date}</span>
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="bg-[#F4F1EA] py-16 text-[#0B0D0E] md:py-24">
        <div className="container-fluid grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#202324]">
              <Image src={post.coverImage} alt={post.title} fill priority sizes="(min-width: 1024px) 65vw, 100vw" className="object-cover" />
            </div>
            <div className="mt-10 max-w-2xl space-y-6">
              {post.content.map((paragraph) => (
                <p key={paragraph} className="text-base leading-[1.8] text-[#4a4a47] md:text-lg">{paragraph}</p>
              ))}
            </div>
          </div>
          <aside className="border-t border-[#0B0D0E]/15 pt-6 lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8f6d2c]">More from the journal</p>
            <Link href={`/media/${nextPost.slug}`} className="group mt-6 block">
              <span className="text-sm text-[#6b6b65]">Next story</span>
              <h2 className="mt-2 text-xl font-semibold leading-snug transition-colors group-hover:text-[#8f6d2c]">{nextPost.title}</h2>
              <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em]">
                Continue reading
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </aside>
        </div>
      </article>
    </>
  );
}