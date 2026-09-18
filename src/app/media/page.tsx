import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/hero/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import BlogCard from "@/components/cards/BlogCard";
import MediaExplorer from "@/components/media/MediaExplorer";
import CTASection from "@/components/ui/CTASection";
import { getBlogs } from "@/lib/api";

export const metadata: Metadata = {
  title: "Media",
  description: "Stories, project updates, ideas and announcements from I Construction and I Real Estate.",
};

export default async function MediaPage() {
  const posts = await getBlogs();
  const featured = posts[0];

  return (
    <>
      <Hero
        eyebrow="Journal / Media"
        headingLines={["Stories from", "site and studio."]}
        description="Project updates, practical ideas and the thinking behind the spaces we build and the places we find."
        image="https://images.pexels.com/photos/35300835/pexels-photo-35300835.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=2200"
        minHeight="min-h-[62vh]"
      />

      {featured && (
        <section className="bg-[#F4F1EA] py-20 text-[#0B0D0E] md:py-28">
          <div className="container-fluid">
            <SectionHeading index="01 / 02" eyebrow="Featured Story" title="From the field." />
            <div className="mt-12 grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <Link href={`/media/${featured.slug}`} className="group relative block aspect-[16/9] overflow-hidden bg-[#202324]">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                />
                <span className="absolute left-5 top-5 border border-[#C8A45D] bg-[#0B0D0E]/75 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.15em] text-[#C8A45D]">
                  {featured.category}
                </span>
              </Link>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8f6d2c]">
                  {new Date(featured.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{featured.title}</h2>
                <p className="mt-5 text-base leading-relaxed text-[#5d5d58]">{featured.excerpt}</p>
                <Link href={`/media/${featured.slug}`} className="group mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em]">
                  Read the story
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#0B0D0E] py-20 md:py-28">
        <div className="container-fluid">
          <SectionHeading
            index="02 / 02"
            eyebrow="The Journal"
            title="Ideas, updates and announcements."
            description="A closer look at our work, our process and the decisions shaping the spaces around us."
            light
          />
          <div className="mt-12">
            <MediaExplorer posts={posts} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Keep In Touch"
        title="Have a project story of your own?"
        actions={[{ label: "Start an Enquiry", href: "/contact" }]}
      />
    </>
  );
}