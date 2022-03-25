import { Component } from '@angular/core';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'syncfusion-angular-play-ground';
  public data: DataManager = new DataManager({
    url: 'https://ej2services.syncfusion.com/production/web-services/api/Employees',
    adaptor: new WebApiAdaptor(),
    crossDomain: true,
  });
  public remoteFields: Object = { text: 'FirstName', value: 'EmployeeID' };
}
