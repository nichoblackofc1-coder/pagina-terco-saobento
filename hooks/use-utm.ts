"use client"

import { useEffect, useState } from "react"

export function useUtmParams() {
  const [utmString, setUtmString] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search)
      const utmParams: string[] = []

      // Captura todos os parâmetros UTM comuns
      const utmKeys = [
        "utm_source",
        "utm_medium", 
        "utm_campaign",
        "utm_term",
        "utm_content",
        "utm_id",
        "fbclid",
        "gclid",
        "ttclid",
        "ref",
        "src"
      ]

      utmKeys.forEach((key) => {
        const value = searchParams.get(key)
        if (value) {
          utmParams.push(`${key}=${encodeURIComponent(value)}`)
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
