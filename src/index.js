/**
 * Brevo MCP Server - Vercel HTTP Entry Point
 */

import { BrevoMCPServer } from './server/mcp-server.js';
import { createMcpHandler } from 'mcp-handler'; // Nutzen Sie das Vercel mcp-handler Paket

// 1. Instanziieren Sie die Server-Logik aus Ihrem Template
const brevoMcp = new BrevoMCPServer();

// 2. Erstellen Sie den HTTP-Handler für Vercels Serverless Functions
const handler = createMcpHandler((server) => {
  // Übertragen Sie die registrierten Tools und Ressourcen auf den Web-Server
  if (brevoMcp.tools) {
    server.tools = brevoMcp.tools;
  }
  if (brevoMcp.resources) {
    server.resources = brevoMcp.resources;
  }
});

// 3. Exportieren Sie die Routen-Methoden, die Vercel für Webanfragen erwartet
export const GET = handler;
export const POST = handler;
