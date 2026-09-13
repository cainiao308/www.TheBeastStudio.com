import type { SitePage } from "@/lib/content";

export default function PageBody({ page }: { page: SitePage }) {
  return <div dangerouslySetInnerHTML={{ __html: page.html }} />;
}
