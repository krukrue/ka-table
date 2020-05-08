import { newRowId } from './Components/NewRow/NewRow';
import { ActionType } from './enums';

export const updateFilterRowValue = (columnKey: string, filterRowValue: any) => ({
  columnKey,
  filterRowValue,
  type: ActionType.UpdateFilterRowValue,
});

export const updateFilterRowOperator = (columnKey: string, filterRowOperator: string) => ({
  columnKey,
  filterRowOperator,
  type: ActionType.UpdateFilterRowOperator,
});

export const updateEditorValue = (rowKeyValue: any, columnKey: string, value: any, settings?: {
  validate: boolean
}) => ({
  columnKey,
  rowKeyValue,
  type: ActionType.UpdateEditorValue,
  validate: settings && settings.validate,
  value,
});

export const updateCellValue = (rowKeyValue: any, columnKey: string, value: any) => ({
  columnKey,
  rowKeyValue,
  type: ActionType.UpdateCellValue,
  value,
});

export const updateSortDirection = (columnKey: string) => ({
  columnKey,
  type: ActionType.UpdateSortDirection,
});

export const closeEditor = (rowKeyValue: any, columnKey: string) => ({
  columnKey,
  rowKeyValue,
  type: ActionType.CloseEditor,
});

export const deleteRow = (rowKeyValue: any) => ({
  rowKeyValue,
  type: ActionType.DeleteRow,
});

export const deselectAllRows = () => ({
  type: ActionType.DeselectAllRows,
});

export const deselectRow = (rowKeyValue: any) => ({
  rowKeyValue,
  type: ActionType.DeselectRow,
});

export const openEditor = (rowKeyValue: any, columnKey: string) => ({
  columnKey,
  rowKeyValue,
  type: ActionType.OpenEditor,
});

export const search = (searchValue: any) => ({
  search: searchValue,
  type: ActionType.Search,
});

export const selectAllRows = () => ({
  type: ActionType.SelectAllRows,
});

export const selectSingleRow = (rowKeyValue: any) => ({
  rowKeyValue,
  type: ActionType.SelectSingleRow,
});

export const selectRow = (rowKeyValue: any) => ({
  rowKeyValue,
  type: ActionType.SelectRow,
});

export const updateGroupsExpanded = (groupKey: any[]) => ({
  groupKey,
  type: ActionType.UpdateGroupsExpanded,
});

export const updateData = (data: any[]) => ({
  data,
  type: ActionType.UpdateData,
});

export const showLoading = (text?: string) => ({
  text,
  type: ActionType.ShowLoading,
});

export const hideLoading = () => ({
  type: ActionType.HideLoading,
});

export const showNewRow = () => ({
  rowKeyValue: newRowId,
  type: ActionType.ShowNewRow,
});

export const hideNewRow = () => ({
  rowKeyValue: newRowId,
  type: ActionType.HideNewRow,
});

export const saveNewRow = (rowId?: any, settings?: {
  closeAfterSave?: boolean,
  validate?: boolean
}) => ({
  rowId,
  closeAfterSave: settings && settings.closeAfterSave,
  rowKeyValue: newRowId,
  validate: settings && settings.validate,
  type: ActionType.SaveNewRow,
});

export const openRowEditors = (rowKeyValue: any) => ({
  rowKeyValue,
  type: ActionType.OpenRowEditors,
});

export const closeRowEditors = (rowKeyValue: any) => ({
  rowKeyValue,
  type: ActionType.CloseRowEditors,
});

export const saveRowEditors = (rowKeyValue: any, settings?: {
  closeAfterSave?: boolean,
  validate?: boolean
}) => ({
  closeAfterSave: settings && settings.closeAfterSave,
  rowKeyValue,
  validate: settings && settings.validate,
  type: ActionType.SaveRowEditors,
});

export const updateRow = (rowData: any, settings?: { saveEditorsValues?: boolean }) => {
  return {
    type: ActionType.UpdateRow,
    saveEditorsValues: settings && settings.saveEditorsValues,
    rowData,
  };
};

export const updatePageIndex = (pageIndex: number) => ({
  pageIndex,
  type: ActionType.UpdatePageIndex,
});