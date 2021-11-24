module.exports = {
    moduleFileExtensions: ['vue', 'js', 'json', 'ts'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.vue$': '@vue/vue3-jest',
        '^.+\\js$': 'babel-jest',
        '^.+\\.ts$': 'ts-jest',
    },
}