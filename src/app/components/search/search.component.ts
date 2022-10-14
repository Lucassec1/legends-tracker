import { SearchTypeOptions } from './../core/types/search';
import { Component, OnInit, Input } from '@angular/core';

type size = 'md' | 'lg';
type filter = 'true' | 'false';

export interface SearchProps {
  filter?: string;
  size?: string;
  placeholder?: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() filter:filter = 'false';
  @Input() size?:size = 'md';
  @Input() placeholder? = 'Procure por um usuário...';

  public type!: SearchTypeOptions;

  ngOnInit(): void {
    this.type = SearchTypeOptions[this.filter]
  }

}
