import { readPage, constructPage } from "./templatingEngine.js";

const overview = readPage("public/html/overview.html");
export const overviewPage = constructPage(overview);

const routingScript = readPage("public/html/routing_script.html");
export const routingScriptPage = constructPage(routingScript);

const crud = readPage("public/html/crud.html");
export const crudPage = constructPage(crud);

const firstServer = readPage("public/html/first_server.html");
export const firstServerPage = constructPage(firstServer);

const functions = readPage("public/html/functions.html");
export const functionsPage = constructPage(functions);

const importExport = readPage("public/html/import_export.html");
export const importExportPage = constructPage(importExport);

const loops = readPage("public/html/loops.html");
export const loopsPage = constructPage(loops);

const time = readPage("public/html/time.html");
export const timePage = constructPage(time);

const variables = readPage("public/html/variables.html");
export const variablesPage = constructPage(variables);
