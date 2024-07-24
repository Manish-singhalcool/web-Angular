import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from 'src/app/core/core.service';
import { ManegmentService } from 'src/app/services/manegment.service';

@Component({
  selector: 'app-uploadpdf',
  templateUrl: './uploadpdf.component.html',
  styleUrls: ['./uploadpdf.component.css']
})
export class UploadpdfComponent implements OnInit {
  client:any;
  dataArray: any[] = [];
  selectedClientId: string;
  selectedFile: File;
  constructor (private _mService:ManegmentService,private _core:CoreService){ }
  ngOnInit(): void {
    this.getManegmentClint();
  }
  
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    //console.log(this.selectedFile.name);
    const formData = new FormData();
    formData.append('files', this.selectedFile);

    this._mService.uploadPdfgetUrl(formData)
    .subscribe({
       next: (resPo)=> {
        console.log(resPo);
        resPo?.data.map(vendor =>{
          this.client=vendor;
          //this.dataArray.push(this.client);
          this.selectedFile = this.client.path;
          console.log(this.selectedFile);
        });
      }
    })
  }

  onClientSelected(clientId: string) {
    this.selectedClientId = clientId;
  }


  getManegmentClint(){
    this._mService.getManegmentClint().subscribe({
      next: (res)=>{
        res?.data.map(vendor =>{
          this.client=vendor;
          this.dataArray.push(this.client);
          console.log(this.dataArray);
        });
      },error:(err: any)=>{
        console.error(err);
      }
    })
  }

  onSubmit() {
    if (!this.selectedFile || !this.selectedClientId) {
      console.error('Please select both client and file');
      return;
    }

    const formData = new FormData();
    formData.append('filePath', this.selectedFile);
    formData.append('clientId', this.selectedClientId);

    this._mService.uploadImageWithClientId(formData)
      .subscribe({
        next: (response) => {
          console.log(response.status);
          if(response.status==200){
            this._core.openSnackBar('Image uploaded successfully:', response.message);
            //location.reload();
          }else{
            this._core.openSnackBar('Something Error', response.message);
            //location.reload();
          }
          //console.log('Image uploaded successfully:', response);
          // Handle response as needed
        },
        error: (error) => {
          console.error('Error uploading image:', error);
          // Handle error
        }
      });
  }

}
