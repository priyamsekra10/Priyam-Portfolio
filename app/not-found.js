import Link from "next/link";
import { ArrowRight } from "@/components/ui/Icons";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="relative isolate grid min-h-[80vh] place-items-center pb-24 pt-32 text-center">
      <div className="backdrop" />
      <div className="container-page">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-5 text-[clamp(3rem,10vw,7rem)] font-semibold leading-none tracking-[-0.04em]">
          Nothing <span className="serif-accent text-accent">here.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-muted">
          That page doesn&apos;t exist, or it moved when the site was rebuilt.
        </p>
        <Link href="/" className="btn btn-primary mt-9">
          Back home <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
