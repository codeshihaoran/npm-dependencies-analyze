import fs from 'fs'
const packagejson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
export const dependenciesDatas = packagejson.dependencies
