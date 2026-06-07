/**
 * Brevo MCP Server - Vercel HTTP Entry Point
 */

import { BrevoMCPServer } from './server/mcp-server.js';
import { createMcpHandler } from 'mcp-handler';

// 1. Instanziieren Sie die Server-Logik
const brevoMcp = new BrevoMCPServer();

// 2. Erstellen Sie den HTTP-Handler für Vercel
const handler = createMcpHandler((server) => {
  if (brevoMcp.tools) {
    server.tools = brevoMcp.tools;
  }
  if (brevoMcp.resources) {
    server.resources = brevoMcp.resources;
  }
});

// 3. Exportieren Sie die Routen-Methoden für Webanfragen
export const GET = handler;
export const POST = handler;
