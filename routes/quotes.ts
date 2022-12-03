import { Router } from "../dependences.ts";
import {
    getQuotes,
    getQuote, 
    addQuote,
    updateQuote,
    deleteQuote,
} from "../controllers/QuoteController.ts";

import { authMiddleware } from "../middleware/auth.ts";

const router = new Router();

router.get("/api/v1/quotes", authMiddleware, getQuotes)
  .get("/api/v1/quotes/:id", getQuote)
  //.get("/api/v1/quotes",  getQuotes)
  .post("/api/v1/quotes",  addQuote)
  //.put("/api/v1/quotes/:id", authMiddleware, updateQuote)
  .put("/api/v1/quotes/:id", updateQuote)
  //.delete("/api/v1/quotes/:id",authMiddleware, deleteQuote);
  .delete("/api/v1/quotes/:id", deleteQuote);

  
export default router;

