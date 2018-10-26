<template>
  <div class="mb-3">
    <div class="d-flex align-items-center mb-2">
      <h4 class="m-0">{{ pelada.title }}</h4>
      <a data-target="#pelada-info" data-toggle="collapse" class="text-black-50 ml-auto pr-2">
        <font-awesome-icon icon="chevron-down" />
      </a>
    </div>
    <div class="collapse" id="pelada-info">
      <div class="bg-light p-3 mb-2">
        <h5 class="text-secondary">Informações:</h5>
        <div v-html="pelada.info"></div>
      </div>
    </div>
    <font-awesome-icon icon="calendar" class="text-black-25" />
    <span class="text-dark"> {{ when }}</span>
    <p class="small">
      <font-awesome-icon icon="clock" class="text-black-25" />
      Limite para desmarcar: <span class="font-weight-bold" v-html="disconfirmLimit"></span>
    </p>
    <hr>
    <p class="small text-black-50">
      Vagas restantes: <strong v-html="seatsRemaings"></strong>
    </p>
    <ConfirmationList :confirmations="pelada.confirmations" :seats="pelada.seats" />
  </div>
</template>

<script>
import ConfirmationList from '@/components/ConfirmationList'
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export default {
  name: 'PeladaItem',
  components: {
    ConfirmationList
  },
  props: {
    pelada: Object
  },
  computed: {
    when () {
      return dayjs(this.pelada.date).format('DD/MM/YYYY [às] HH:mm')
    },
    disconfirmLimit () {
      const limiteDate = dayjs(this.pelada.date).subtract(1, 'hour')
      if (dayjs(limiteDate).isBefore(dayjs())) {
        return `<span class="text-danger">encerrado</span>`
      }
      return dayjs().to(limiteDate)
    },
    seatsRemaings () {
      const remainings = this.pelada.seats - this.pelada.confirmations.length
      if (remainings < 0) {
        return '<span class="text-danger">encerradas</span>'
      }
      return remainings
    }
  }
}
</script>

<style>
.text-black-25 {
  color: rgba(0, 0, 0, 0.25);
}
</style>
