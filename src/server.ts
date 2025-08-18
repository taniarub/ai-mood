import express from 'express'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

// Serve static assets
app.use(express.static(resolve(__dirname, '../dist/client')))

// Handle SSR
app.get('*', async (req, res) => {
  try {
    const url = req.originalUrl

    let template = readFileSync(resolve(__dirname, '../dist/client/index.html'), 'utf-8')
    
    // Import server render function
    const { render } = await import('../dist/server/entry-server.js')
    const { html } = render(url)

    // Inject rendered HTML
    template = template.replace('<!--ssr-outlet-->', html)

    res.status(200).set({ 'Content-Type': 'text/html' }).end(template)
  } catch (e) {
    console.error(e)
    res.status(500).end('Internal Server Error')
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})