import React, { useState } from 'react';

import Table, { ITableOption } from '../../Components/Table/Table';
import { DataType } from '../../Enums/DataType';
import { EditingMode } from '../../Enums/EditingMode';
import { OptionChangedFunc } from '../../Types/OptionChangedFunc';

const dataArray: any[] = [
  { id: 1, name: 'Mike Wazowski', score: 80, passed: true },
  { id: 2, name: 'Billi Bob', score: 155, passed: false },
  { id: 3, name: 'Tom Williams', score: 45, passed: false },
  { id: 4, name: 'Kurt Cobain', score: 75, passed: true },
  { id: 5, name: 'Marshall Bruce', score: 77, passed: true },
  { id: 6, name: 'Sunny Fox', score: 33, passed: false },
];

const tableOption: ITableOption = {
  columns: [
    { field: 'name', title: 'Name', dataType: DataType.String, width: '40%' },
    {
      dataType: DataType.Number,
      field: 'score',
      title: 'Score',
      validation: (value: any, rowData: any) => {
        if (value > 100) {
          return `Value can't be more than 100`;
        }
      },
      width: '10%',
    },
    {
      dataType: DataType.Boolean,
      field: 'passed',
      title: 'Passed',
    },
  ],
  editableCells: [{
    field: 'score',
    rowKeyValue: 2,
  }],
  editingMode: EditingMode.Cell,
  rowKey: 'id',
};

const ValidationDemo: React.FC = () => {
  const [option, changeOptions] = useState(tableOption);
  const onOptionChanged: OptionChangedFunc = (value) => {
    changeOptions({ ...option, ...value });
  };

  const [data, changeData] = useState(dataArray);
  const onDataChanged: OptionChangedFunc = (newValue) => {
    changeData(newValue);
  };
  return (
    <>
      <input defaultValue={option.search} onChange={(event) => {
        onOptionChanged({ search: event.currentTarget.value });
      }} />
      <Table
        {...option}
        data={data}
        onOptionChanged={onOptionChanged}
        onDataChanged={onDataChanged}
      />
    </>
  );
};

export default ValidationDemo;
