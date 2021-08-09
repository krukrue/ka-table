import * as React from 'react';

import { reorderColumns } from '../../actionCreators';
import defaultOptions from '../../defaultOptions';
import { IHeadCellProps } from '../../props';
import { ChildAttributesItem } from '../../types';
import { isCellResizeShown } from '../../Utils/CellResizeUtils';
import { addElementAttributes, getElementCustomization } from '../../Utils/ComponentUtils';
import { getDraggableProps } from '../../Utils/PropsUtils';
import { isSortingEnabled } from '../../Utils/SortUtils';
import HeadCellContent from '../HeadCellContent/HeadCellContent';
import HeadCellResize from '../HeadCellResize/HeadCellResize';

const HeadCell: React.FunctionComponent<IHeadCellProps> = (props) => {
  const {
    childComponents,
    colSpan,
    column,
    column: { style, isResizable, key },
    columnReordering,
    columnResizing,
    dispatch,
<<<<<<< HEAD
    sortingMode,
    childComponents,
=======
    hasChildren,
    isGrouped,
    rowSpan,
    sortingMode
>>>>>>> 339a589730a63ff62e8e1ac65c902ca05a302cb7
  } = props;
  let {
    childComponents: { headCell }
  } = props;
<<<<<<< HEAD
  const [width, setWidth] = React.useState(style ? style.width : undefined);
  const stateStyle = { ...style, width };
  const headCellDispatch = headCellDispatchWrapper(setWidth, dispatch);
=======
>>>>>>> 339a589730a63ff62e8e1ac65c902ca05a302cb7

  if (columnReordering) {
    const reorderedRowProps: ChildAttributesItem<IHeadCellProps> = getDraggableProps(key, dispatch, reorderColumns, defaultOptions.css.draggedColumn, defaultOptions.css.dragOverColumn);
    headCell = addElementAttributes(reorderedRowProps, props, headCell);
  }

  const { elementAttributes, content } = getElementCustomization({
    className: `${defaultOptions.css.theadCell} ${defaultOptions.css.theadFixed} ${defaultOptions.css.theadBackground} ${isSortingEnabled(sortingMode) ? 'ka-pointer' : ''} ${isGrouped ? 'ka-thead-grouped-cell' : ''}`,
    colSpan,
    rowSpan,
    scope: 'col',
    style,
    id: key,
  }, props, headCell);

  return (
    <th {...elementAttributes}>
      <div className={defaultOptions.css.theadCellWrapper}>
        <div className={defaultOptions.css.theadCellContentWrapper}>
          {content || <HeadCellContent {...props} />}
        </div>
        {isCellResizeShown(isResizable, columnResizing) && !hasChildren && (
          <HeadCellResize
            column={column}
<<<<<<< HEAD
            currentWidth={width}
            dispatch={headCellDispatch}
            childComponents={childComponents} />
=======
            dispatch={dispatch}
            childComponents={childComponents}/>
>>>>>>> 339a589730a63ff62e8e1ac65c902ca05a302cb7
        )}
      </div>
    </th>
  );
};

export default HeadCell;
