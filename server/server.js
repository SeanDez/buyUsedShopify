import "@babel/polyfill";
import dotenv from "dotenv";
import "isomorphic-fetch";
import createShopifyAuth, { verifyRequest } from "@shopify/koa-shopify-auth";
import graphQLProxy, { ApiVersion } from "@shopify/koa-shopify-graphql-proxy";
import Koa from "koa";
import next from "next";
import Router from "koa-router";
import session from "koa-session";
import * as handlers from "./handlers/index";
const serve = require("koa-static");
const mount = require("koa-mount");

dotenv.config();
const port = parseInt(process.env.PORT, 10) || 8081;
const dev = process.env.NODE_ENV !== "production";
// const app = next({
//   dev
// });
// const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET, SHOPIFY_API_KEY, SCOPES } = process.env;

// app.prepare().then(() => {
//   const server = new Koa();
//   const router = new Router();
//   server.use(session(server));
//   server.keys = [SHOPIFY_API_SECRET];
//   server.use(
//     createShopifyAuth({
//       apiKey: SHOPIFY_API_KEY,
//       secret: SHOPIFY_API_SECRET,
//       scopes: [SCOPES],
//
//       async afterAuth(ctx) {
//         //Auth token and shop available in session
//         //Redirect to shop upon auth
//         const { shop, accessToken } = ctx.session;
//         ctx.cookies.set("shopOrigin", shop, {
//           httpOnly: false
//         });
//         ctx.redirect("/");
//       }
//     })
//   );
//   server.use(
//     graphQLProxy({
//       version: ApiVersion.October19
//     })
//   );
//   router.get("*", verifyRequest(), async ctx => {
//     await handle(ctx.req, ctx.res);
//     ctx.respond = false;
//     ctx.res.statusCode = 200;
//   });
//   server.use(router.allowedMethods());
//   server.use(router.routes());
//   server.listen(port, () => {
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });


const koa = new Koa();
const router = new Router();
koa.use(session(koa));
koa.keys = [SHOPIFY_API_SECRET];


// serve anything in public folder
koa.use(serve("public"));


// authenticate shopify credentials. Then capture an access token and redirect to root
// root is whatever is at the root of path ./public/
koa.use(createShopifyAuth({
  apiKey : SHOPIFY_API_KEY
  , secret : SHOPIFY_API_SECRET
  , scopes : [SCOPES]
  , async afterAuth(ctx) {
    const {shop, accessToken} = ctx.session;
    ctx.cookies.set("shopOrigin", shop, { httpOnly : false});
    
    
    ctx.redirect("/");
  }
}));

// use graphQL middleware
koa.use(graphQLProxy({version : ApiVersion.October19}));


// check if the script tag is posted. Add if not there
// this is a middleware
// todo work in progress
const getAllScriptTags = async ctx => {
  try {
    const response = await fetch('admin/api/2019-10/script_tags.json', {
      method : "post"
    });
    const responseBody = await response.json();
    console.log(responseBody, `=====responseBody get all script tags=====`);
    
    ctx.res.statusCode = 200;
    ctx.respond("ctx respond triggered");
  }
  catch (e) {
    console.log(e, `=====e=====`);
    ctx.respond("error")
  }
};

// send an access token to any request
router.post("/unauth", async ctx => {
  // see what access tokens are available
  console.log(ctx.session.accessToken, `=====ctx.session.accessToken (general)=====`);
  ctx.body = ctx.session.accessToken;
  
  return;
  
  // post to storefrontaccesstoken api
  try {
    const response = await fetch("https://seandezoysa.myshopify.com/admin/api/2019-10/storefront_access_tokens.json", {
      method : "post"
    });
    const accessToken = await response.json();
    console.log(accessToken, `=====accessToken=====`);
    ctx.res.statusCode = 200;
    ctx.body = accessToken;
  }
  catch (e) {
    console.log(e, `=====error=====`);
  }
  
});


// run all remaining requests through verification middleware
router.get("*", verifyRequest(), async ctx => {
  
  console.log(ctx.session.accessToken, `=====accessToken inside router.get(*...=====`);
  
  ctx.respond = false;
  ctx.res.statusCode = 200;
});


koa.use(router.allowedMethods());
koa.use(router.routes());
koa.listen(port, () => console.log(`Koa server listening on port ${port}`));

