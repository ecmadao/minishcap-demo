<script setup lang="ts">
import Button from './Button/Button.vue'
</script>

<template>
    <div class="flex">
        <div :class="{ error: error }" class="border-b-4 border-gray-400 py-2 mr-8 text-6xl">
            <input
                v-model="url"
                class="input appearance-none bg-transparent border-none placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none"
                type="url"
                placeholder="Put your link here"
                @keyup.enter="convertToShortURL"
            >
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
import validator from 'validator'

export default defineComponent({
    name: 'Form',
    data() {
        return {
            error: false
        }
    },
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
            if (!validator.isURL(this.$store.state.url)) {
                this.setStatus(true)
                return
            }
            this.$store.dispatch(ACTION_TYPES.SHORTEN)
        },
        setStatus(error: boolean) {
            this.$data.error = error
        }
    },
    watch: {
        error: function(val) {
            if (val) {
                setTimeout(() => this.setStatus(false), 500)
            }
        }
    }
})
</script>

<style scoped>
.input {
    width: 600px;
}

.error {
    animation: shake 0.5s;
}

@keyframes shake {
    0% {
        transform: translate(1px, 1px) rotate(0deg);
    }

    10% {
        transform: translate(-1px, -2px) rotate(-1deg);
    }

    20% {
        transform: translate(-3px, 0px) rotate(1deg);
    }

    30% {
        transform: translate(3px, 2px) rotate(0deg);
    }

    40% {
        transform: translate(1px, -1px) rotate(1deg);
    }

    50% {
        transform: translate(-1px, 2px) rotate(-1deg);
    }

    60% {
        transform: translate(-3px, 1px) rotate(0deg);
    }

    70% {
        transform: translate(3px, 1px) rotate(-1deg);
    }

    80% {
        transform: translate(-1px, -1px) rotate(1deg);
    }

    90% {
        transform: translate(1px, 2px) rotate(0deg);
    }

    100% {
        transform: translate(1px, -2px) rotate(-1deg);
    }
}
</style>