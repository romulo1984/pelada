import BaseModel from './BaseModel'
import {
  equal,
  integer,
  min
} from 'vue-mc/validation'

/**
* Pelada model
*/
export default class PeladaModel extends BaseModel {
  // Default attributes that define the "empty" state.
  defaults () {
    return {
      id: null,
      title: 'Pelada',
      info: 'Pelada da semana',
      seats: 28,
      location: 'R9 Bate Bola',
      status: 'scheduled'
    }
  }

  // Attribute mutations.
  mutations () {
    return {
      id: (id) => Number(id) || null
    }
  }

  // Attribute validation
  validation () {
    return {
      id: integer.and(min(1)).or(equal(null)),
      title: String
    }
  }

  // Route configuration
  routes () {
    return {
      fetch: 'pelada/{id}',
      save: 'pelada'
    }
  }
}
