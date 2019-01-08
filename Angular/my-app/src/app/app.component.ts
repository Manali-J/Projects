import { Component, Input } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
  public isCollapsed: boolean = true;
  currentText:string;
  hideToggle: boolean = true;
  maxLength=80;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.determineView();
  }
  
  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
}

determineView() {
  if (!this.text || this.text.length <= this.maxLength) {
      this.currentText = this.text;
      this.isCollapsed = false;
      this.hideToggle = true;
      return;
  }
  this.hideToggle = false;
  if (this.isCollapsed == true) {
      this.currentText = this.text.substring(0, this.maxLength) + "...";
  } else if(this.isCollapsed == false)  {
      this.currentText = this.text;
  }

}
}
