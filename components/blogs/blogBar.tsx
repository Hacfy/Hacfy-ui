import { getReadMore, getRecentPosts } from "@/lib/posts"
import Link from "next/link"


export function Sidebar() {
  const recent = getRecentPosts()
  const more = getReadMore()

  return (
    <div className="space-y-8">
      <section className="rounded-lg border bg-card p-5">
        <h3 className="text-lg font-semibold">Recent Articles</h3>
        <ul className="mt-4 space-y-3">
          {recent.map((p:any) => (
            <li key={p.slug} className="group">
              <Link
                href={p.href ?? "#"}
                className="block rounded-md border border-transparent p-3 transition-colors hover:border-secondary/40 hover:bg-secondary/5"
              >
                <p className="text-sm font-medium leading-5">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-lg border bg-card p-5">
        <h3 className="text-lg font-semibold">Read More</h3>
        <ul className="mt-4 space-y-3">
          {more.map((p:any) => (
            <li key={p.slug} className="group">
              <Link
                href={p.href ?? "#"}
                className="block rounded-md border border-transparent p-3 transition-colors hover:border-secondary/40 hover:bg-secondary/5"
              >
                <p className="text-sm font-medium leading-5">{p.title}</p>
                <p className="text-xs text-muted-foreground">{p.category}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
