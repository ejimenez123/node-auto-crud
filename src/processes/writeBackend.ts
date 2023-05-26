import {
  controller,
  model,
  serviceIndex,
  serviceStore,
  serviceUpdate
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
  model({
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
    output
  })
  serviceIndex({
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
    output
  })
  serviceStore({
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
    output
  })
  serviceUpdate({
    tableMaster,
    tableMasterUCamelCase,
    tableMasterSingular,
    tableMasterSingularUCamelCase,
    tableStructure,
    output
  })
}

