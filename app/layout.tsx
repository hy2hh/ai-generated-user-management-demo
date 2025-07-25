import './globals.css'

export const metadata = {
  title: 'Generated App',
  description: 'AI-generated Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}