/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable no-lonely-if */
/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
/**
 *
 * Tree
 *
 */

import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table as RsuiteTree, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'; // or 'rsuite-table/dist/css/rsuite-table.css'
import lodash from 'lodash/array';
import Checkbox from '../Checkbox';
import LoadingIndicator from '../LoadingIndicator';
import TreeGlobalStyles from './TreeGlobalStyles';
import ExteraIconPlaceholder from './ExteraIconPlaceholder';
import ToggleIconCollapsed from './ToggleIconCollapsed';
import ToggleIconExpanded from './TogggleIconExpanded';
function Tree({
  data,
  onNodeExpand,
  rowKeyColumn,
  isChildLoading,
  partialLoadData,
  selectionMode = 'single',
  onRowClick,
  onRowSingleSelection,
  isRTL = true,
  selectionColor = '#CCC',
  unknownParents,
  expandToggleIcon,
  collapseToggleIcon,
  parentIcon,
  childIcon,
}) {
  useEffect(() => {
    if (data) {
      setTreeInputData(prepareData(data));
      setLoadingTree(false);
    }
  }, [data]);
  useEffect(() => {
    if (lastExpandedNode && Array.isArray(partialLoadData)) {
      const columnKeyAddedData = prepareNotAttachedData(
        partialLoadData,
        lastExpandedNode[TREE_KEY_COLUMN],
      );
      if (!lastExpandedNode.children || lastExpandedNode.children.length === 0)
        setTreeInputData([
          ...appendExpandedNode(
            treeInputData,
            generateTreeKeyColumn(lastExpandedNode),
            columnKeyAddedData,
          ),
        ]);
    } else if (lastExpandedNode && !Array.isArray(partialLoadData)) {
      setTreeInputData([
        ...removeToggleIndicator(
          treeInputData,
          generateTreeKeyColumn(lastExpandedNode),
        ),
      ]);
    }
  }, [partialLoadData]);
  useEffect(() => {
    if (!isChildLoading) {
      setLoadingNode();
      if (
        lastExpandedNode &&
        selectionList &&
        selectionList.indexOf(lastExpandedNode[TREE_KEY_COLUMN]) !== -1
      ) {
        const node = findANode(
          lastExpandedNode[TREE_KEY_COLUMN],
          treeInputData,
        );
        if (node)
          handleChangeCheckbox(
            { target: { checked: true } },
            node[TREE_KEY_COLUMN],
            // eslint-disable-next-line no-underscore-dangle
            node._parent,
            getChildrenOfNode(node.children),
          );
      }
    }
  }, [isChildLoading]);

  const TREE_KEY_COLUMN = 'treeKeyColumn';

  const [treeInputData, setTreeInputData] = useState([]);

  const [expandedNodeList, setNodeExpandedList] = useState([]);
  const [lastExpandedNode, setlastExpandedNode] = useState();

  const [loadingNode, setLoadingNode] = useState();
  const [loadingTree, setLoadingTree] = useState(true);

  const [selectionList, setSelectionList] = useState([]);

  const [selectedRowRef, setSelectedRowRef] = useState();

  const handleExpandChange = (isOpen, rowData) => {
    if (isOpen) {
      if (typeof onNodeExpand === 'function') {
        if (rowData._parent) {
          const parentsId = convertNode2Id(getParents(rowData._parent));
          onNodeExpand(
            rowData,
            isOpen,
            parentsId,
            lodash.last(parentsId),
            parentsId.length,
          );
        } else onNodeExpand(rowData, isOpen);
      }
      setlastExpandedNode(rowData);
      setNodeExpandedList(
        lodash.uniq([...expandedNodeList, rowData[TREE_KEY_COLUMN]]),
      );
      setLoadingNode(rowData[TREE_KEY_COLUMN]);
    } else {
      setNodeExpandedList(
        lodash.without([...expandedNodeList], rowData[TREE_KEY_COLUMN]),
      );
    }
  };
  const handleChangeCheckbox = (
    checkbox,
    treeKeyColumn,
    parentNode,
    childrenNodes,
  ) => {
    const selectionResult = [treeKeyColumn];
    let parentNodeList = [];
    if (parentNode) parentNodeList = getParents(parentNode);
    if (childrenNodes && childrenNodes.length > 0) {
      if (getChildrenIdOfChildrenList(childrenNodes).length > 0) {
        selectionResult.push(...getChildrenIdOfChildrenList(childrenNodes));
      }
    }
    // check checkbox
    if (checkbox.target.checked) {
      if (parentNodeList.length > 0) {
        parentNodeList.forEach(pNode => {
          if (isAllChildrenSelected(pNode, selectionResult)) {
            selectionResult.push(pNode[TREE_KEY_COLUMN]);
          }
        });
        checkChild(selectionResult);
      } else {
        checkChild(selectionResult);
      }
    } else {
      // uncheck checkbox
      if (parentNodeList && parentNodeList.length > 0) {
        const parentNodeTreeKeyColumnList = convertNode2TreeKeyColumn(
          parentNodeList,
        );
        unCheckChild(
          lodash.union([...selectionResult], [...parentNodeTreeKeyColumnList]),
        );
      } else unCheckChild(selectionResult);
    }
  };
  const handleRowClick = (rowData, e) => {
    if (typeof onRowClick === 'function') onRowClick(rowData, e);
    // eslint-disable-next-line no-restricted-syntax
    if (selectedRowRef)
      selectedRowRef.classList.remove('rs-table-row-selection');
    setSelectedRowRef(e.currentTarget);
    e.currentTarget.classList.add('rs-table-row-selection');
    if (typeof onRowSingleSelection === 'function')
      onRowSingleSelection(rowData[TREE_KEY_COLUMN]);
  };
  const checkChild = selectedIds => {
    setSelectionList(lodash.uniq([...selectionList, ...selectedIds]));
  };
  const unCheckChild = unSelectedIds => {
    setSelectionList(lodash.without([...selectionList], ...unSelectedIds));
  };
  const isAllChildrenSelected = (node, currentSelectionList) => {
    if (
      node.children &&
      node.children.length > 0 &&
      selectionList &&
      selectionList.length > 0
    ) {
      const nodeChildrenTreeKeyColumn = convertNode2TreeKeyColumn(
        node.children,
      );
      const diff = lodash.difference(
        [...nodeChildrenTreeKeyColumn],
        [...selectionList, ...currentSelectionList],
      );
      if (diff.length === 0) return true;
    }
    return false;
  };
  const convertNode2Id = nodeList => {
    if (nodeList && nodeList.length > 0) {
      return lodash.reverse(nodeList.map(nchild => nchild[rowKeyColumn]));
    }
    return [];
  };
  const convertNode2TreeKeyColumn = nodeList => {
    if (nodeList && nodeList.length > 0) {
      return lodash.reverse(nodeList.map(nchild => nchild[TREE_KEY_COLUMN]));
    }
    return [];
  };
  const getParents = (parentNode, result = []) => {
    result.push(parentNode);
    // eslint-disable-next-line no-underscore-dangle
    if (parentNode._parent) getParents(parentNode._parent, result);
    return result;
  };
  const findANode = (nodeId, treeData, level = 0, result) => {
    for (let i = 0; i < treeData.length; i += 1) {
      if (nodeId === treeData[i][TREE_KEY_COLUMN]) {
        result = treeData[i];
        return result;
      }
      if (treeData[i].children && treeData[i].children.length > 0)
        result = findANode(nodeId, treeData[i].children, level + 1);
    }
    return result;
  };
  const getChildrenOfNode = (childList, result = []) => {
    childList.map(child => {
      if (child.children && child.children.length > 0) {
        result.push(child);
        getChildrenOfNode(child.children, result);
      } else {
        result.push(child);
      }
    });
    return result;
  };
  const getChildrenIdOfChildrenList = (childList, result = []) => {
    childList.forEach(child => {
      if (child.children && child.children.length > 0)
        getChildrenIdOfChildrenList(child.children, result);
      if (child[TREE_KEY_COLUMN]) result.push(child[TREE_KEY_COLUMN]);
    });
    return result;
  };
  const prepareData = allTreeNodesData => {
    allTreeNodesData.map(item => {
      item[TREE_KEY_COLUMN] = generateTreeKeyColumn(item);
      if (item.children && item.children.length > 0) {
        prepareData(item.children);
      } else if (unknownParents && !item.children) {
        item.children = [];
      }
    });
    return allTreeNodesData;
  };
  const prepareNotAttachedData = (allTreeNodesData, parentTreeKeyColumn) => {
    allTreeNodesData.map(item => {
      if (unknownParents) item.children = [];
      item[TREE_KEY_COLUMN] = `${parentTreeKeyColumn}/${item[rowKeyColumn]}`;
    });
    return allTreeNodesData;
  };
  const appendExpandedNode = (treeData, nodeTreeKeyColumn, newExpandedNode) => {
    treeData.map(treeNode => {
      if (generateTreeKeyColumn(treeNode) === nodeTreeKeyColumn) {
        treeNode.children = newExpandedNode;
        return treeNode;
      }
      if (treeNode.children && treeNode.children.length > 0) {
        appendExpandedNode(
          treeNode.children,
          nodeTreeKeyColumn,
          newExpandedNode,
        );
      }
    });
    return treeData;
  };
  const removeToggleIndicator = (treeData, nodeTreeKeyColumn) => {
    treeData.map(treeNode => {
      if (generateTreeKeyColumn(treeNode) === nodeTreeKeyColumn) {
        treeNode.children = undefined;
        return treeNode;
      }
      if (treeNode.children && treeNode.children.length > 0) {
        removeToggleIndicator(treeNode.children, nodeTreeKeyColumn);
      }
    });
    return treeData;
  };
  const generateTreeKeyColumn = node => {
    let nodeId = node[rowKeyColumn];
    if (node._parent && node._parent[TREE_KEY_COLUMN]) {
      nodeId = `${node._parent[TREE_KEY_COLUMN]}/${nodeId}`;
    }
    return nodeId;
  };
  const showToggleWithDirection = isRightToLeft => {
    if (isRightToLeft) return collapseToggleIcon || <ToggleIconCollapsed />;
    return collapseToggleIcon || <ToggleIconCollapsed />;
  };
  const showExpandIndicator = rowKeyData => {
    if (loadingNode === rowKeyData)
      return (
        <div style={{ height: '5px', width: '16.1px' }}>
          <LoadingIndicator
            width={14}
            height={14}
            top={-14}
            position="absolute"
          />
        </div>
      );
    if (expandedNodeList.indexOf(rowKeyData) !== -1)
      return expandToggleIcon || <ToggleIconExpanded />;
    return showToggleWithDirection(isRTL);
  };
  const showCheckbox = (treeKeyColumn, parent, children) => {
    if (selectionList.indexOf(treeKeyColumn) !== -1) {
      return (
        <Checkbox
          id={treeKeyColumn}
          onChange={e =>
            handleChangeCheckbox(e, treeKeyColumn, parent, children)
          }
          checked
        />
      );
    }
    return (
      <Checkbox
        id={treeKeyColumn}
        onChange={e => handleChangeCheckbox(e, treeKeyColumn, parent, children)}
        checked={false}
      />
    );
  };
  const showExtraIcon = nodeChildren => {
    if (nodeChildren && parentIcon) return parentIcon;
    if (!nodeChildren && childIcon) return childIcon;
  };
  return loadingTree ? (
    <LoadingIndicator width={100} height={100} />
  ) : (
    <Fragment>
      <TreeGlobalStyles selectionColor={selectionColor} />
      <RsuiteTree
        data={treeInputData}
        isTree
        rtl={isRTL}
        onExpandChange={handleExpandChange}
        rowKey={TREE_KEY_COLUMN}
        showHeader={false}
        bordered={false}
        onRowClick={handleRowClick}
        renderTreeToggle={(icon, rowData) =>
          showExpandIndicator(rowData[TREE_KEY_COLUMN])
        }
        autoHeight
      >
        <Column width={500} flexGrow={1} treeCol>
          <HeaderCell />
          <Cell dataKey="value">
            {rowData => (
              <Fragment>
                {selectionMode === 'multiple'
                  ? showCheckbox(rowData[TREE_KEY_COLUMN], rowData._parent, rowData.children,) : ''}
                <ExteraIconPlaceholder>
                  {showExtraIcon(rowData.children)}
                </ExteraIconPlaceholder>
                <span>{rowData.value}</span>
              </Fragment>
            )}
          </Cell>
        </Column>
      </RsuiteTree>
    </Fragment>
  );
}
Tree.propTypes = {
  data: PropTypes.array,
  onNodeExpand: PropTypes.func,
  rowKeyColumn: PropTypes.string,
  isChildLoading: PropTypes.bool,
  isRTL: PropTypes.bool,
  partialLoadData: PropTypes.any,
  selectionMode: PropTypes.string,
  onRowClick: PropTypes.func,
  onRowSingleSelection: PropTypes.func,
  selectionColor: PropTypes.string,
  unknownParents: PropTypes.bool,
  expandToggleIcon: PropTypes.node,
  collapseToggleIcon: PropTypes.node,
  parentIcon: PropTypes.node,
  childIcon: PropTypes.node,
};

export default Tree;
