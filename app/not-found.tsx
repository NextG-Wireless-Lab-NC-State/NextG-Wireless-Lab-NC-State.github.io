import Link from "next/link";
import { Arrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="bg-ink text-white">
      <div className="container-site py-28 text-center">
        <p className="label-red mb-3">404</p>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl">Page not found</h1>
        <p className="mt-4 text-wolfgray-300">The page you are looking for does not exist.</p>
        <Link href="/" className="btn-primary mt-8">
          Back to Home <Arrow />
        </Link>
      </div>
    </section>
  );
}
