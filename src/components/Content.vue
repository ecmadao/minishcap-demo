<script setup lang="ts">
import Form from './Form.vue'
import Button from './Button/Button.vue'
import ShortLink from './ShortLink.vue'
</script>

<template>
    <div class="container">
        <transition appear name="slide-fade" mode="out-in">
            <Form v-if="!$store.getters.shortLink" />
            <div v-else class="flex flex-col">
                <div class="mr-auto mb-6">
                    <Button v-on:click="reset">
                        <div class="p-2 text-xl inline-flex justify-center items-center">
                            <font-awesome-icon :icon="['fas', 'chevron-circle-left']" />
                            &nbsp;
                            Back
                        </div>
                    </Button>
                </div>
                <ShortLink />
            </div>
        </transition>
    </div>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-in-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-in-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.container {
    width: 1000px;
    min-width: 1000px;
}
</style>

<script lang="ts">
import { MUTATION_TYPES } from '../store'
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Content',
    methods: {
        reset() {
            this.$store.commit(MUTATION_TYPES.SET_SHORT_LINK, null)
        }
    }
})
</script>