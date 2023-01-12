import { readFile, writeFile, readdir, unlink, mkdir } from 'fs/promises'
import { join } from 'path'
import { GitProcess } from 'dugite'

const dirs = await readdir('vtbs')
await Promise.all(dirs
  .map(dir => join('vtbs', dir))
  .map(path => ({ path, contentP: readFile(path) }))
  .map(async ({ path, contentP }) => {
    const content = await contentP
    if (path.normalize() !== path) {
      console.log(path)
    }
    await unlink(path)
    await writeFile(path.normalize(), content)
  }))

const { default: list } = await import('./index.js')

const { meta, ...rest } = await list
const { stdout } = await GitProcess.exec(['log', '-1', '--format="%ct"'], process.cwd())
const timestamp = Number(stdout.replace(/"/g, ''))
const e = { meta: { ...meta, timestamp }, ...rest }

await mkdir('json').catch(() => {})
await writeFile('json/list.json', JSON.stringify(e))
await writeFile('json/list.uncompressed.json', JSON.stringify(e, undefined, 2))

const vtbs = await readdir('vtbs')
await writeFile('json/fs.json', JSON.stringify(Object.fromEntries(await Promise.all(vtbs.map(async filename => [filename, JSON.parse(await readFile(`./vtbs/${filename}`))])))))
