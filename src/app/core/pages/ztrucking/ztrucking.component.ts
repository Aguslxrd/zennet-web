import { Component } from '@angular/core';

@Component({
  selector: 'app-ztrucking',
  templateUrl: './ztrucking.component.html',
  styleUrls: ['./ztrucking.component.css']
})
export class ZtruckingComponent {

  constructor() { }

  ngOnInit() { }

  downloadFile() {
    const filePath = "/assets/instaladores.rar";
    
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'instaladores.rar';

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  }
  

}
