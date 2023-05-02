import {
  controller
} from '@modules/renderings/laravel'
import { pathBackend as output } from '@config/output'
import type { ParamsAll } from '@customTypes/utilsRendering';

export default ({
  tableMaster,
  tableMasterUCamelCase,
  tableMasterSingular,
  tableMasterSingularUCamelCase,
  tableStructure,
  tableDetailOfMaster
}: Omit<ParamsAll, 'output'>): void => {
  controller({
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
    output
  })
}

