"use client"

import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductDescriptionGenerator() {
  const [productName, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setDescription("")

    try {
      const response = await fetch("/api/generate-description", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productName }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to generate description.")
      }

      const data = await response.json()
      setDescription(data.description)
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>AI Product Description Generator</CardTitle>
          <CardDescription>Enter your product name to get catchy descriptions and SEO tags.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="product-name">Product Name</Label>
              <Input
                id="product-name"
                type="text"
                placeholder="e.g., Smartwatch Pro"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Generating..." : "Generate Description"}
            </Button>
            {error && <p className="text-sm text-red-500">{error}</p>}
            {description && (
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="description">Generated Description & SEO Tags</Label>
                <Textarea id="description" value={description} readOnly rows={10} className="resize-none" />
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
