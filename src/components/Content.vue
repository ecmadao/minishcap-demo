<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
    <div class="border-b-4 border-gray-400 py-2 mr-8 text-6xl">
        <input class="appearance-none bg-transparent border-none placeholder-gray-400 focus:placeholder-gray-300 focus:outline-none" type="url" placeholder="Put your link here">
    </div>
    <Button>
        <div class="p-4 text-6xl">
            Shorten it
        </div>
    </Button>
</template>