<template>
  <div class="home">
    <MainMenu :items="$store.state.menuItems"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/MainMenu.vue'; // @ is an alias to /src

@Component({
  components: {
    MainMenu,
  },
})
export default class Home extends Vue {
  public items = [];
}
</script>
