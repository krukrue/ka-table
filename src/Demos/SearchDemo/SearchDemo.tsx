import React, { useState } from 'react';

import { ITableOption, Table } from '../../lib';
import { search } from '../../lib/actionCreators';
import { DataType } from '../../lib/enums';
import { kaReducer } from '../../lib/reducers';
import { DispatchFunc } from '../../lib/types';

const dataArray: any[] = [
  { id: 1, name: 'Mike Wazowski', score: 80, passed: true },
  { id: 2, name: 'Billi Bob', score: 55, passed: false },
  { id: 3, name: 'Tom Williams', score: 45, passed: false },
  { id: 4, name: 'Kurt Cobain', score: 75, passed: true },
  { id: 5, name: 'Marshall Bruce', score: 77, passed: true },
  { id: 6, name: 'Sunny Fox', score: 33, passed: false },
];

const tableOption: ITableOption = {
  columns: [
    { key: 'name', title: 'Name', dataType: DataType.String, style: { width: '40%' } },
    { key: 'score', title: 'Score', dataType: DataType.Number, style: { width: '10%' } },
    {
      dataType: DataType.Boolean,
      key: 'passed',
      search: (searchText, rowData) => {
        return (searchText === 'false' && !rowData.passed) || (searchText === 'true' && rowData.passed);
      },
      title: 'Passed',
    },
  ],
  data: dataArray,
  noDataRow: () => 'No Data Found',
  rowKeyField: 'id',
  search: 'Billi Bob',
};

const SearchDemo: React.FC = () => {
  const [option, changeOptions] = useState(tableOption);
  const dispatch: DispatchFunc = (action) => {
    changeOptions((prevState: ITableOption) => kaReducer(prevState, action));
  };
  return (
    <>
      <input type='search' defaultValue={option.search} onChange={(event) => {
        dispatch(search(event.currentTarget.value));
      }} className='top-element'/>
      <Table
        {...option}
        dispatch={dispatch}
      />
    </>
  );
};

export default SearchDemo;
