// Vite requires files under src/ to be imported as modules (unlike public/,
// which can be referenced by a plain URL string). Update each path below to
// match the exact filename + extension sitting in src/project — case
// sensitive, and this must be a static string literal for Vite to bundle it.

import tasknova from "../project/tasknova.jpg";
import elearning from "../project/elearning.jpg";
import chatapp from "../project/chatapp.jpg";
import churnanalysis from "../project/churnanalysis.jpg";
import salesdashboard from "../project/salesdashboard.jpg";
import irisClassification from "../project/iris-classification.jpg";
import AI_multi_agent from "../project/AI_multi-agent.jpg";
import RAG_CHATBOT from "../project/RAG-CHATBOT.jpg";

// Keyed by each project's `id` field in data/projects.js.
// Any project.id not listed here falls back to the placeholder image
// automatically — nothing breaks if you add a project before its image.
export const projectImages = {
  tasknova,
  elearning,
  chatapp,
  churnanalysis,
  salesdashboard,
  "iris-classification": irisClassification,
  "langgraph-support": AI_multi_agent,
  "rag-chatbot": RAG_CHATBOT,
};

export const FALLBACK_IMAGE = "/images/projects/placeholder.svg";
