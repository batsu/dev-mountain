const fs = require('fs')
const path = `./.env`
const vars = `
 NASA_KEY=${process.env.NASA_KEY}
`
fs.writeFileSync(path, vars)