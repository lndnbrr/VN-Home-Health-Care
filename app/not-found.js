import Link from "next/link";

export const metadata = {
  title: "Page Not Found | VN Home Health Care",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center px-4 py-24 gap-6">
      <h1 className="font-bold underline text-primary text-[8vw] sm:text-[4vw]">
        Page Not Found
      </h1>
      <p className="max-w-xl text-lg text-primary-dark">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved, no longer exists, or was input incorrectly.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-2">
        <Link
          href="/"
          className="w-[80%] sm:w-auto mx-auto text-center bg-primary text-secondary font-bold text-[4vw] sm:text-[1.2vw] px-6 py-3 rounded-md"
        >
          Back to Home
        </Link>
        <Link
          href="/pages/contact"
          className="w-[80%] sm:w-auto mx-auto text-center border-2 border-primary text-primary font-bold text-[4vw] sm:text-[1.2vw] px-6 py-3 rounded-md"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
