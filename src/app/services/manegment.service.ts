import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManegmentService {

  constructor(private _http:HttpClient) { }
  private apiUrl = 'http://192.168.60.202:8080/api/client/pdf/reader';
 
  //private pdfUrl = 'http://newstoredev.rapidsoft.in:81/api/utility/s3_files/upload';
  //private token = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSU1QzMzgteFhqd3RfRGVsaW1ldGVyWHgtODI3Y2NiMGVlYThhNzA2YzRjMzRhMTY4OTFmODRlN2IteFhqd3RfRGVsaW1ldGVyWHgtUlNUIiwiZXhwIjoxNzEwODMxMzUzNzIwLCJpYXQiOjE3MTA4MzEzNTB9.mQohaVKsa4ndOFud65yxK7zaWpqD0JwPDBVJK0WvtSKnq5VYXHgCv9746iU-4sPd1mfIS6DKwKYF5cwpsPJtfA'; // Replace 'your-auth-token' with your actual token

  
  addManegment(data:any): Observable<any>{
    return this._http.post('http://192.168.60.202:8080/api/save/client',data);
  }
  
  uploadImageWithClientId(formData: FormData) {
    return this._http.post<any>(`${this.apiUrl}`, formData);
  }

  // uploadPdfgetUrl(path:any): Observable<any>{
  //    // Set up headers with authorization token
  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${this.token}`
  //   });

  //   // Append query parameters to the URL
  //     const url = `${this.pdfUrl}?companyId=1&withoutOrganization=true&moduleId=1`;

  //   // Make the POST request with headers and path data
  //     return this._http.post(url, path, { headers });
  
  // }
  // uploadPdfgetUrl(formData: FormData): Observable<any> {
  //   // Set up headers with authorization token
  //   const headers = new HttpHeaders({
  //     'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSU1QzMzgteFhqd3RfRGVsaW1ldGVyWHgtODI3Y2NiMGVlYThhNzA2YzRjMzRhMTY4OTFmODRlN2IteFhqd3RfRGVsaW1ldGVyWHgtUlNUIiwiZXhwIjoxNzEwODMxMzUzNzIwLCJpYXQiOjE3MTA4MzEzNTB9.mQohaVKsa4ndOFud65yxK7zaWpqD0JwPDBVJK0WvtSKnq5VYXHgCv9746iU-4sPd1mfIS6DKwKYF5cwpsPJtfA'
  //   });

  //   // Append query parameters to the URL
  //   const url = `${this.pdfUrl}?companyId=1&withoutOrganization=true&moduleId=1`;

  //   // Make the POST request with headers and path data
  //   return this._http.post(url, { files: FormData }, { headers });
  // }

  uploadPdfgetUrl(formData: FormData): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJSU1QzMzgteFhqd3RfRGVsaW1ldGVyWHgtODI3Y2NiMGVlYThhNzA2YzRjMzRhMTY4OTFmODRlN2IteFhqd3RfRGVsaW1ldGVyWHgtUlNUIiwiZXhwIjoxNzEwODMxMzUzNzIwLCJpYXQiOjE3MTA4MzEzNTB9.mQohaVKsa4ndOFud65yxK7zaWpqD0JwPDBVJK0WvtSKnq5VYXHgCv9746iU-4sPd1mfIS6DKwKYF5cwpsPJtfA'
    });
  
    const url = 'http://newstoredev.rapidsoft.in:81/api/utility/s3_files/upload?companyId=1&withoutOrganization=true&moduleId=1';
  
    return this._http.post(url, formData, { headers });
  }
  // uplodeFile(path: any,clientId: number): Observable<any>{
  //   return this._http.post(`http://192.168.60.202:8080/api/client/pdf/reader?filePath=/${path}&clientId=`,clientId);
  // }
  
  getManegmentClint(): Observable<any>{
    return this._http.get('http://192.168.60.202:8080/api/get/all/client');
  }
}
