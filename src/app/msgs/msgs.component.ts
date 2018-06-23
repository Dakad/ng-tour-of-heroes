import { Component, OnInit } from '@angular/core';
import { MsgService } from '../msg.service';

@Component({
  selector: 'app-msgs',
  templateUrl: './msgs.component.html',
  styleUrls: ['./msgs.component.css']
})
export class MsgsComponent implements OnInit {
  // public because will be binded in the template.
  constructor(public msgService: MsgService) {}

  ngOnInit() {}
}
