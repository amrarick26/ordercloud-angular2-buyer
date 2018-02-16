import { TREE_ACTIONS, ITreeOptions } from 'angular-tree-component';

export const DEFAULT_CATEGORY_TREE_OPTIONS : ITreeOptions = {
    actionMapping: {
        mouse: {
            click: (tree, node, $event) => {
              TREE_ACTIONS.SELECT(tree, node, $event);
              if (node.hasChildren) TREE_ACTIONS.TOGGLE_EXPANDED(tree, node, $event);
            }
        },
    },
    animateExpand: true,
}

export const MOCK_CATEGORY_TREE = [
    {
      id: 1,
      name: 'Category A',
      children: [
        { id: 1.1, name: 'Category A.1' },
        { id: 1.2, name: 'Category A.2' }
      ]
    },
    {
      id: 2,
      name: 'Category B',
      children: [
        { id: 2.1, name: 'Category B.1' },
        { id: 2.2, name: 'Category B.2' }
      ]
    },
    {
      id: 3,
      name: 'Category C',
      children: [
        { id: 3.1, name: 'Category C.1' },
        {
          id: 3.2,
          name: 'Category C.2',
          children: [
            { id: 3.21, name: 'Cateogry C.2.1' }
          ]
        }
      ]
    }
  ];