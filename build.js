const fs = require('fs/promises')

const build = async () => {
  const articles = await fs.readdir('./article')
  console.log(articles)

  const links = articles.map((name) => `<p><a href="/article/${name}">${name}</a></p>`)
  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>list</title>
  </head>
  <body>
    ${links.join('\n')}
  </body>
  </html>`
  await fs.writeFile('index.html', html, 'utf-8')
}

build()