<template>
    <div class="flex items-baseline">
        <span class="text-6xl">{{$store.state.shortUrl?.short}}</span>
        &nbsp;&nbsp;
        <span>Expire at 2021-12-31</span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ShortLink',
})
</script>