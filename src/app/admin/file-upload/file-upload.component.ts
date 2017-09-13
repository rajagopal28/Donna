import { Component, OnInit } from '@angular/core';

import { UserDataService } from '../../services/user-data.service';
import { LocationDataService } from '../../services/location-data.service';


const ALERT_TYPE_ERROR = 'danger';
const ALERT_TYPE_SUCCESS = 'success';
const DEFAULT_SUCCESS_MESSAGE = 'Insertion Successful!';

@Component({
  selector: 'FileUpload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [UserDataService, LocationDataService]
})
export class FileUploadComponent implements OnInit {

  message : any = {
    content : '',
    isHidden: true,
    type: ALERT_TYPE_ERROR
  };

  selectedFiles : any = {};
  reset : any = {
    users: false,
    locations: false,
    campus: false
  }

  constructor(private userService: UserDataService, private locationService: LocationDataService) { }

  ngOnInit() {
  }
  uploadCampus() {
    let file = this.selectedFiles['campus'];
    if(file) {
      console.log('uploadFile', file, file.name);
      this.locationService.uploadCampus(file,  this.reset.campus).subscribe(
        response => this.handleResponse(response),
        error =>  this.handleResponse(error),
        () => console.log('Upl0aded!'));
    }
  }
  uploadLocations() {
    let file = this.selectedFiles['locations'];
    if(file) {
      console.log('uploadFile', file, file.name);
      this.locationService.uploadLocations(file, this.reset.locations).subscribe(
        response => this.handleResponse(response),
        error =>  this.handleResponse(error),
        () => console.log('Upl0aded!'));
    }
  }
  uploadUsers() {
    let file = this.selectedFiles['users'];
    console.log(this.reset);
    if(file) {
      console.log('uploadFile', file, file.name);
      this.userService.uploadUsers(file,  this.reset.users).subscribe(
        response => this.handleResponse(response),
        error =>  this.handleResponse(error),
        () => console.log('Upl0aded!'));
    }
  }
  fileChange(event, fileKey) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
      console.log('in files...');
       this.selectedFiles[fileKey]= fileList[0];
    }
  }

  handleResponse(response){
     console.log(response);
     this.message.isHidden = false;
     if(response.success) {
       this.message.content = DEFAULT_SUCCESS_MESSAGE;
       this.message.type = ALERT_TYPE_SUCCESS + 'Count: ' + response.count;
     } else  {
       this.message.content = response.message? response.message : 'ERROR:' + JSON.stringify(response);
       this.message.type = ALERT_TYPE_ERROR;
     }
  }
}
