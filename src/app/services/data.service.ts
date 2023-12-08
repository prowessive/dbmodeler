import { Injectable } from '@angular/core';

export interface Model {
  id: number;
  name: string;
  label: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private models:Model[] = []
  private modelCounter: number = 0;


  getModel(identifier: Number): Model | undefined {
    var localModel = this.models.find(x => x.id == identifier);
    return localModel;
  }

  get Models(){
    return [...this.models]
  }


  addModel(model: Model) {
    this.modelCounter += 1
    model.id = this.modelCounter
    this.models.push(model)
    return model
  }

  newModel() {
    var localModel: Model = {
      id: 0,
      name: '',
      label: ''
    }
    this.modelCounter += 1
    localModel.id = this.modelCounter
    localModel.name = 'Model ' + localModel.id
    localModel.label = 'Model ' + localModel.id
    this.models.push(localModel)
    return localModel
  }

  constructor() { }
}
