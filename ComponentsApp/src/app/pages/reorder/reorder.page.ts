import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {
  reordering = false;
  personajes: string[] = ['Batman', 'Superman', 'Aquaman', 'Wonderwoman', 'Flash'];
  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any) {
    console.log(event);

    const itemToMove = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemToMove);

    event.detail.complete();
    console.log(this.personajes)
  }

}
