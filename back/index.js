const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router
  .get("/api/main_event", ctx => {
    ctx.body = {
      title: "3ème Trophée Danses et Spectacles de Rambouillet",
      location: {
        name: "Pôle culturel de la Lanterne",
        adress: "5 rue Gautherin à Rambouillet"
      },
      date: "26 Octobre 2019",
      price: "Matinée : 15€ / Soirée : 25€ / Journée : 30€",
      program: {
        title1: "Matin",
        hour1: "10h-12h",
        details1: { title: "Compétitions Standards et Latines", type: "Eliminatoires" },
        title2: "Après-midi",
        hour2: "14h-18h",
        details2:
          "Compétitions Standards et Latines - Eliminatoires et petites finales",
        title3: "Soirée",
        hour3: "20h-minuit",
        details3:
          "Finales des grandes compétitions Standards et Latines - Danse libre et Shows"
      }
    };
  })
  .post("/api/login", ctx => {
    console.log(ctx.request.body);
    ctx.body = {};
  });

app
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3001);
