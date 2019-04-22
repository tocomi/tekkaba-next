const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')
const stylus = require('./loaders/stylus')
const pug = require('./loaders/pug')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
environment.loaders.prepend('stylus', stylus)
environment.loaders.prepend('typescript', typescript)
environment.loaders.prepend('pug', pug)
module.exports = environment
