import type { Express } from "express";
import { createServer, type Server } from "http";
import { contactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Contact form validation endpoint (for frontend validation)
  app.post("/api/contact/validate", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      res.json({ success: true, valid: true });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Validation failed" });
      }
    }
  });

  // Contact form submission (redirects to external service)
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate form data
      const validatedData = contactSchema.parse(req.body);
      
      // In a static website, contact forms typically use:
      // - Email services (mailto links)
      // - Third-party form handlers (Formspree, Netlify Forms, etc.)
      // - External APIs
      
      // For now, return success and suggest external integration
      res.json({ 
        success: true, 
        message: "Form validated successfully. Please integrate with your preferred contact form service.",
        suggestion: "Consider using Formspree, Netlify Forms, or EmailJS for form handling."
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to process contact form" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
