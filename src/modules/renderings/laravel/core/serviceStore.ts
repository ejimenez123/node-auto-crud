import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default (params: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/laravel/serviceStore',
      outputPath: `Http/Services/${params.tableMasterSingularUCamelCase}`,
      outputFile: `Store${params.tableMasterSingularUCamelCase}Service.php`
    },
    params
  )
}