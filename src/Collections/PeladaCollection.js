import BaseCollection from './BaseCollection'
import PeladaModel from '../Models/PeladaModel'

/**
* PeladaCollection
*/
export default class PeladaCollection extends BaseCollection {
  // Model that is contained in this collection.
  model () {
    return PeladaModel
  }

  // Default attributes
  defaults () {
    return {
      orderBy: 'id'
    }
  }

  // Route configuration
  routes () {
    return {
      fetch: 'pelada'
    }
  }
}
