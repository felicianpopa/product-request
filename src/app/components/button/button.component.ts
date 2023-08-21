import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() text: string = "Clik here";
  @Input() bgColor: string = "transparent";

  @Output() btnClick = new EventEmitter();

  onClick() {
    this, this.btnClick.emit();
  }
}
