<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
    <div class="flex">
        <div class="border-b-4 border-gray-400 py-2 mr-8 text-6xl">
            <input v-model="url" class="input appearance-none bg-transparent border-none placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none" type="url" placeholder="Put your link here">
        </div>
        <Button v-on:click="convertToShortURL">
            <div class="p-4 text-6xl">
                Shorten it
            </div>
        </Button>
    </div>
</template>

<script lang="ts">
import { MUTATION_TYPES, ACTION_TYPES } from '../store'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Form',
    computed: {
        url: {
            get(): string {
                return this.$store.state.url
            },
            set(value: string) {
                this.$store.commit(MUTATION_TYPES.SET_URL, value)
            }
        }
    },
    methods: {
        convertToShortURL() {
            this.$store.dispatch(ACTION_TYPES.SHORTEN)
        }
    }
})
</script>

<style scoped>
    .input {
        width: 600px;
    }
</style>