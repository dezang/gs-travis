import Woowahan from 'woowahan'

const Main = Woowahan.View.create('Main', {
    template: '<h1>Hello, Woowahan</h1>'
})

global.$ = global.jQuery = Woowahan.$

const app = new Woowahan();

app.start({
    url: '/', container: 'body', view: Main
})