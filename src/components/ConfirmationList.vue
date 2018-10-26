<template>
  <ul class="list-unstyled">
    <li class="media mb-2" v-for="(confirmation, key) in confirmations" :key="confirmation.id" :class="{ 'not-confirmed': !confirmed(key) }">
      <img class="mr-3 rounded-circle" :src="`http://i.pravatar.cc/40?img=${key + 1}`" alt="" width="40">
      <div class="media-body">
        <h6 class="my-0 truncate">
          {{ confirmation.player.name }}
        </h6>
        <span v-if="confirmed(key)" class="text-success">
          confirmado
        </span>
        <span v-else class="text-muted">
          lista de espera
        </span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ConfirmationList',
  props: {
    confirmations: Array,
    seats: Number
  },
  methods: {
    confirmed (key) {
      return this.seats - (key + 1) >= 0
    }
  }
}
</script>

<style scoped>
.truncate {
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.not-confirmed {
  opacity: 0.4;
}
</style>
