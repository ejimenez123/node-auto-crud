import rendering from '@utils/rendering';
import type { ParamsAll } from '@customTypes/utilsRendering'

export default ({
  tableMaster,
  tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  tableStructure,
  tableDetailOfMaster,
  tableMasterForeignKeysAssoc,
  output
}: ParamsAll): void => {
  rendering(
    {
      template: './src/templates/laravel/serviceStore',
      outputPath: `Http/Services/${tableMasterSingularUCamelCase}`,
      outputFile: `Store${tableMasterSingularUCamelCase}Service.php`
    }, {
      tableMaster,
      tableMasterUCamelCase,
      tableMasterSingular,
      tableMasterSingularUCamelCase,
      tableStructure,
      tableDetailOfMaster,
      tableMasterForeignKeysAssoc
    },
    output
  )
}
