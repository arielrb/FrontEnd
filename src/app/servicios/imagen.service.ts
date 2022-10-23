import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';
import { Console } from 'console';
@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private storage: Storage) { }

  url: string = "";

  public uploadImage($event: any, nombreFile: string) {
    const FILE = $event.target.files[0];
    const URLIMGSAVE = ref(this.storage, `imagen/${nombreFile}`)
    uploadBytes(URLIMGSAVE, FILE).then(response => this.getImagen())
      .catch(error => console.log(error));
  }

  public getImagen() {
    const URLIMGGET = ref(this.storage, `imagen`);
    list(URLIMGGET).then(async response => {
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
        console.log(`La URL es: ${this.url}`)
      }
    }
    ).catch(error => console.log(error));

  }


}
