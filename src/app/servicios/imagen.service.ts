import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL, uploadBytesResumable } from '@angular/fire/storage';
import { DomSanitizer } from '@angular/platform-browser';
import { UrlTree } from '@angular/router';
import { Console } from 'console';
@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private storage: Storage, private sanitizer: DomSanitizer) { }

  url: string = "";

  public uploadImage($event: any, nombreFile: string) {
    //obtener el archivo de la img
    const FILE = $event.target.files[0];
    //Asignar nombre al archivo en una cte que sera url
    const URLIMGSAVE = ref(this.storage, `imagen/${nombreFile}`)
    //Subir la imagen
    uploadBytesResumable(URLIMGSAVE, FILE).then(response => this.getImagen())
      .catch(error => console.log(error));
  }

  public getImagen() {
    //const URLIMGGET = ref(this.storage, 'imagen');
    const URLIMGGET = ref(this.storage, 'imagen')
    list(URLIMGGET).then(async response => {
      for (let item of response.items) {
        this.url = await getDownloadURL(item);

        console.log(`La URL es: ${this.url}`);

      }
    }
    ).catch(error => console.log(error));

  }

  /*
  public ExtraerFakePath(url:string){
    if (url.substr(0,12) == "C:\\fakepath\\"){
      return url.substr(12);
    }
    var x;
    x = url.lastIndexOf('/');
    if (x >=0){
      return url.substr(x+1);
    }
    x = url.lastIndexOf('\\');
    if(x >=0 )
    {
      return url.substr(x+1);
    }
    return url;
  }*/


}
