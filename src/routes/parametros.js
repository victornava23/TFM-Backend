import { Router } from "express";

import { createParam, deleteParam, getParam, getParamCount, getParams, updateParam } from "../controllers/parametros";

const router = Router();

router.get('/parametros',getParams)

router.get('/parametros/count',getParamCount)

router.get('/parametros/:id',getParam)

router.post('/parametros', createParam)

router.put('/parametros/:id', updateParam)

router.delete('/parametros/:id', deleteParam)

export default router;  