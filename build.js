const fs = require('fs/promises')

const build = async () => {
  const articles = await fs.readdir('./article')

  const rootIndex = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>list</title>
  </head>
  <body>
    ${articles.map((name) => `<p><a href="article/${name}">${name}</a></p>`).join('\n')}
  </body>
  </html>`

  await fs.writeFile('index.html', rootIndex, 'utf-8')
}

build()