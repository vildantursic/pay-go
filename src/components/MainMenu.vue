<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 lg4 v-for="(item, i) of items" :key="i">
      <v-card class="ma-2">
        <v-img
          :src="item.image"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{item.title}}</h3>
            <div>{{item.description}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class MainMenu extends Vue {
  @Prop() private items!: Array<{}>;
}
</script>
