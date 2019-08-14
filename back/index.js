const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router
    .get('/api/main_event', ctx => {
        ctx.body={
            title: '3ème Trophée Danses et Spectacles de Rambouillet',
            location: { name: 'Pôle culturel de la Lanterne', adress: '5 rue Gautherin à Rambouillet' },
            date: '26 Octobre 2019',
            price: 'Matinée : 15€ / Soirée : 25€ / Journée : 30€',
            hours: 'Matin : 9h / Soirée : 20h',
            title1: 'Matin',
            hour1: '10h-12h',
            title2: 'Après-midi',
            hour2: '14h-18h',
            title3: 'Soirée',
            hour3: '20h-minuit'
        }
    })
    .get ('/api/program', ctx =>{
        ctx.body={
            
        }
    })

app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3001);