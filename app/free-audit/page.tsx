import type { Metadata } from "next";

import FreeAuditClient from "@/components/FreeAudit/FreeAuditClient";
import Navbar from "@/components/Home/Navbar";

export const metadata: Metadata = {
  title: "Free Digital Marketing Audit | Sharp Rays",
  description:
    "Request a free digital marketing audit from Sharp Rays. Get an initial review of your website, SEO, social media, paid marketing and digital growth opportunities.",
};

export default function FreeAuditPage() {
  return (
    <>
      <Navbar />
      <FreeAuditClient />
    </>
  );
}