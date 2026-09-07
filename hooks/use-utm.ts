"use client"

import { useEffect, useState } from "react"

export function useUtmParams() {
  const [utmString, setUtmString] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search)
      const utmParams: string[] = []

      searchParams.forEach((value, key) => {
        if (value) {
          utmParams.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        }
      })

      setUtmString(utmParams.join("&"))
    }
  }, [])

  const appendUtmToUrl = (url: string): string => {
    if (!utmString) return url
    const separator = url.includes("?") ? "&" : "?"
    return `${url}${separator}${utmString}`
  }

  return { utmString, appendUtmToUrl }
}
