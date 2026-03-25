import { Router } from "express";

import {
  overviewPage,
  loopsPage,
  importExportPage,
  routingScriptPage,
  timePage,
  variablesPage,
  functionsPage,
  firstServerPage,
  crudPage,
} from "../util/pagesUtil.js";

const router = Router();

router.get("/", (req, res) => res.send(overviewPage));
router.get("/loops", (req, res) => res.send(loopsPage));
router.get("/import-export", (req, res) => res.send(importExportPage));
router.get("/routing-script", (req, res) => res.send(routingScriptPage));
router.get("/time", (req, res) => res.send(timePage));
router.get("/variables", (req, res) => res.send(variablesPage));
router.get("/functions", (req, res) => res.send(functionsPage));
router.get("/first-server", (req, res) => res.send(firstServerPage));
router.get("/crud", (req, res) => res.send(crudPage));

export default router;
