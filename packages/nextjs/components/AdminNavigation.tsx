// components/SidebarNavigation.tsx
import Link from "next/link";

export default function AdminNavigation() {
  return (
    <nav className="menu">
      <ul className="space-y-2">
        <li>
          <Link href="/project" className="btn btn-ghost justify-start w-full text-left">
            Project
          </Link>
        </li>
        <li>
          <Link href="/research" className="btn btn-ghost justify-start w-full text-left">
            Research
          </Link>
        </li>
       
        <li>
          <Link href="/protocol" className="btn btn-ghost justify-start w-full text-left">
            Protocol
          </Link>
        </li>
        <li>
          <Link href="/blockexplorer" className="btn btn-ghost justify-start w-full text-left">
            Transactions
          </Link>
        </li>
        <li>
          <Link href="/consent" className="btn btn-ghost justify-start w-full text-left">
            Consent
          </Link>
        </li>
        <li>
          <Link href="/review" className="btn btn-ghost justify-start w-full text-left">
            Review
          </Link>
        </li>

        <li>
          <Link href="/survey" className="btn btn-ghost justify-start w-full text-left">
            Survey
          </Link>
        </li>
        <li>
          <Link href="/marketplace" className="btn btn-ghost justify-start w-full text-left">
            Marketplace
          </Link>
        </li>
      </ul>
    </nav>
  );
}
