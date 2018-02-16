import { Component, OnInit } from '@angular/core';
import { MOCK_CATEGORY_TREE, DEFAULT_CATEGORY_TREE_OPTIONS } from './category-tree.constants';

@Component({
  selector: 'category-tree',
  templateUrl: './category-tree.component.html',
  styleUrls: ['./category-tree.component.scss']
})
export class CategoryTreeComponent implements OnInit {
  nodes: any = MOCK_CATEGORY_TREE;
  options: any = DEFAULT_CATEGORY_TREE_OPTIONS;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
