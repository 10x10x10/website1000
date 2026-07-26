import React from 'react'

type ServerClientContentProps = {
  serverContent: React.ReactNode
  clientContent: React.ReactNode
  fallback?: React.ReactNode
}

export default function ServerClientContent({ serverContent, clientContent, fallback = null }: ServerClientContentProps) {
  const [isBrowser, setIsBrowser] = React.useState(false)

  React.useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (!isBrowser) {
    return <>{serverContent ?? fallback}</>
  }

  return <>{clientContent ?? serverContent ?? fallback}</>
}
