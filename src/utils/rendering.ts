import fs from 'fs'
import ejs from 'ejs'
import type { ParamsAll, Rendering } from '../types/utilsRendering'

export default (
    rendering: Rendering,
    params: ParamsAll
  ): void => {

  const output = './output'
  let path = `${output}/${rendering.outputPath}`
  let file = `${path}/${rendering.outputFile}`
  let template = fs.readFileSync(rendering.template)
  let content = ejs.render(template.toString(), params);

  if (!fs.existsSync(output)) {
    fs.mkdirSync(output);
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  }
  
  fs.writeFile(file, content, err => {
    (err)
      ?  console.error(err)
        : console.log(`file ${file} written successfully`)
  });
}