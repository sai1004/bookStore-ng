import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BTechService {

  constructor() { }

  getBooks() {
    return [
      
      { id:1, bookname: 'MPMC', branch:'ECE', Author:'vishweshwaraiah', price: 300, publisher: 'SIA' },
      { id:2, bookname: 'VLSI', branch:'ECE', Author:'vishweshwaraiah', price: 300, publisher: 'SIA' },
      { id:3, bookname: 'C', branch:'ECE', Author:'vishweshwaraiah', price: 300, publisher: 'SIA' },
      { id:4, bookname: 'PYTHON', branch:'ECE', Author:'vishweshwaraiah', price: 300, publisher: 'SIA' },
      { id:5, bookname: 'ICA', branch:'ECE', Author:'vishweshwaraiah', price: 300, publisher: 'SIA' },
      { id:6, bookname: 'DSP', branch:'ECE', Author:'vishweshwaraiah', price: 300, publisher: 'SIA' },
      { id:7, bookname: 'DIP', branch:'ECE', Author:'vishweshwaraiah', price: 300, publisher: 'SIA' },
      { id:8, bookname: 'RADAR', branch:'ECE', Author:'vishweshwaraiah', price: 300, publisher: 'SIA' },
      { id:9, bookname: 'AWP', branch:'ECE', Author:'vishweshwaraiah', price: 300, publisher: 'SIA' }

    ]
  }
}