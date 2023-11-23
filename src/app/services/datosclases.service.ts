import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface DatosClases{
  modified: number;
  id: any;
  fecha: any;
  hora: any;
  curso: any;
  secc: any;
}

const ITEMS_KEY = 'Datos-Clases';

@Injectable({
  providedIn: 'root'
})
export class DatosClasesService {

  private _storage : Storage;

  constructor(private storage:Storage) { 
    this.init();
   }

   //Crear Storage
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //Crear objeto en Storage
  async addClases(clase: DatosClases):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((clases: DatosClases[])=>{ 
      if(clases){
        clases.push(clase);
        return this.storage.set(ITEMS_KEY, clases);
      }
      else
        return this.storage.set(ITEMS_KEY, [clase]);
    })
  }


  //Leer Datos del Storage
  async getClases():Promise<DatosClases[]>{
    return this.storage.get(ITEMS_KEY);
  }

  //Actualizar objeto del Storage
  async updateClases(clase: DatosClases):Promise<any>{
    return this.storage.get(ITEMS_KEY).then((clases: DatosClases[])=>{
      if(!clases || clases.length==0){
        return null;
      }
      let newClase: DatosClases[] = [];
      for (let i of clases){
        if(clase.id == i.id){
          newClase.push(clase);
        }
        else{
          newClase.push(i);
        }
      }
      this.storage.set(ITEMS_KEY, newClase);
     })
  }

  //Eliminar objeto del Storage
  async deleteClases(id:any):Promise<DatosClases>{
    return this.storage.get(ITEMS_KEY).then((clases : DatosClases[])=>{
      if (!clases || clases.length == 0){
        return null;
      }
      let toKeep: DatosClases[] = []; 
      for (let i of clases){
        if (i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }

}
