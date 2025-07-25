export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AI-Generated Application</h1>
      <p className="text-gray-600">
        This is a fallback template. Claude Code integration needed for full generation.
      </p>
      <div className="mt-8 p-4 bg-gray-100 rounded">
        <h2 className="font-semibold mb-2">Original Requirements:</h2>
        <pre className="text-xs overflow-auto">{originalPrompt}</pre>
      </div>
    </div>
  )
}