<template>
    <div class="flex flex-col items-baseline">
        <a class="text-6xl text-left" v-bind:href="$store.getters.shortLink">{{$store.getters.shortLink}}</a>
        &nbsp;&nbsp;
        <span class="text-gray-400">{{expireTime}}</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { formatToDatetime } from '../utils/date'

export default defineComponent({
    name: 'ShortLink',
    data() {
        return {
            expireTime: (function(self) {
                const expireTime = self.$store.state.shortUrl?.expiredAt
                return expireTime ? `Expire at ${formatToDatetime(expireTime)}` : 'Never expire'
            })(this)
        }
    }
})
</script>