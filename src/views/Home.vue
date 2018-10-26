<template>
  <div class="container mt-3">
    <div class="row" v-if="peladas.models.length">
      <div class="col-12">
        <PeladaItem :pelada="peladas.models[0]" />
      </div>
    </div>
  </div>
</template>

<script>
import PeladaCollection from '@/Collections/PeladaCollection'
import PeladaModel from '@/Models/PeladaModel'
import PeladaItem from '@/components/PeladaItem'

export default {
  name: 'home',
  components: {
    PeladaItem
  },
  data () {
    let peladas = new PeladaCollection()
    let newPelada = new PeladaModel({}, peladas)

    return { peladas, newPelada }
  },
  mounted () {
    this.peladas.fetch()
  }
}
</script>
