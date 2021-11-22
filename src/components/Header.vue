<script setup lang="ts">
import Button from './Button.vue'
</script>

<template>
    <div class="absolute w-full top-0 left-0 flex justify-between">
        <p class="text-6xl">minishcap</p>
        <div>
            <Button>
                <a href="https://github.com/ecmadao/minishcap-service" class="text-xl inline-flex p-2 justify-center items-center">
                    <font-awesome-icon :icon="['fab', 'github']" />
                    &nbsp;
                    GitHub
                </a>
            </Button>
        </div>
    </div>
</template>