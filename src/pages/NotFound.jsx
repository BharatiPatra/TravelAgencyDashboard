import { Link } from "react-router-dom"
import {Button} from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl mb-6">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/">
          <Button variant="primary">Return Home</Button>
        </Link>
      </div>
    </div>
  )
}
