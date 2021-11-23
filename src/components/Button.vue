<template>
    <div class="relative flex justify-center items-center cursor-pointer">
        <button class="border-4 border-gray-500 bg-white custom-button">
            <slot></slot>
        </button>
        <div class="w-full h-full button-shadow"></div>
    </div>
</template>

<style>
.button-shadow {
    @apply bg-gray-400 -z-1 absolute transform translate-x-4 translate-y-4
}

.custom-button {
    @apply transition-transform
}

.custom-button:hover {
    transform: translate(0.5rem, 0.5rem);
}

.custom-button:active {
    transform: translate(1rem, 1rem);
}
</style>