import { useThemeContext } from "@/context/ThemeContext";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { FiCheck, FiCheckCircle, FiCopy, FiCpu, FiLayers, FiServer } from "react-icons/fi";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco, vs2015 } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const codeSnippets = [
  {
    id: "nextjs",
    label: "Next.js 14 & React",
    icon: <FiLayers size={14} />,
    filename: "app/dashboard/actions.ts",
    language: "typescript",
    code: `// High-Performance Next.js Server Action
'use server';

import { revalidatePath } from 'next/cache';
import { db } from '@/lib/database';

export async function createTenantWorkspace(formData: FormData) {
  const session = await auth();
  if (!session?.user) throw new Error('Unauthorized');

  const workspace = await db.workspace.create({
    data: {
      name: formData.get('name') as string,
      ownerId: session.user.id,
      tier: 'ENTERPRISE',
      region: 'us-east-1',
    },
  });

  revalidatePath('/dashboard');
  return { success: true, workspaceId: workspace.id };
}`,
  },
  {
    id: "devops",
    label: "Cloud & CI/CD",
    icon: <FiServer size={14} />,
    filename: ".github/workflows/deploy.yml",
    language: "yaml",
    code: `# Zero-Downtime Multi-Cloud Deployment
name: Production Deployment Pipeline

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Strict Unit & E2E Tests
        run: npm run test:ci

      - name: Build Optimized Docker Container
        run: docker build -t tech-solutions/prod:latest .

      - name: Deploy to Kubernetes Cluster
        uses: azure/k8s-deploy@v4
        with:
          manifests: ./k8s/deployment.yaml
          images: tech-solutions/prod:latest
          strategy: rolling-update`,
  },
  {
    id: "ai",
    label: "AI & RAG Pipeline",
    icon: <FiCpu size={14} />,
    filename: "services/ai_agent.py",
    language: "python",
    code: `# Intelligent Semantic Retrieval & LLM Generation
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Pinecone
from fastapi import FastAPI

app = FastAPI(title="Enterprise AI Engine")

@app.post("/api/v1/query")
async def process_user_query(query: str, tenant_id: str):
    embeddings = OpenAIEmbeddings(model="text-embedding-3-large")
    vectorstore = Pinecone.from_existing_index("enterprise-index", embeddings)
    
    # Retrieve top contextual knowledge chunks
    docs = vectorstore.similarity_search(query, k=5, filter={"tenant": tenant_id})
    
    llm = ChatOpenAI(model="gpt-4o", temperature=0.2)
    response = await llm.ainvoke([
        {"role": "system", "content": "You are a secure enterprise assistant."},
        {"role": "user", "content": f"Context: {docs}\\n\\nQuery: {query}"}
    ])
    
    return {"result": response.content, "sources": [d.metadata for d in docs]}`,
  },
];

const BuildTools = () => {
  const { darkMode } = useThemeContext();
  const [activeTab, setActiveTab] = useState(codeSnippets[0].id);
  const [copied, setCopied] = useState(false);

  const currentSnippet = codeSnippets.find((s) => s.id === activeTab) || codeSnippets[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Slide direction="up" duration={700} triggerOnce>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary dark:text-blue-400">
              Modern Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mt-2 mb-4">
              Production-Grade Code & Standards
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
              We engineer maintainable, tested, and high-performance software utilizing the industry’s most modern paradigms.
            </p>
          </Slide>
        </div>

        {/* Code Showcase Terminal Window */}
        <div className="rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 bg-gray-900 text-white overflow-hidden">
          {/* Top Bar with Tabs and Copy Action */}
          <div className="px-4 py-3 bg-gray-950 flex flex-wrap items-center justify-between gap-3 border-b border-gray-800">
            {/* Tabs */}
            <div className="flex items-center gap-2">
              {codeSnippets.map((snippet) => (
                <button
                  key={snippet.id}
                  onClick={() => setActiveTab(snippet.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeTab === snippet.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "bg-gray-900 text-gray-400 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {snippet.icon}
                  <span>{snippet.label}</span>
                </button>
              ))}
            </div>

            {/* File Name & Copy Button */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-gray-400 hidden sm:inline">
                {currentSnippet.filename}
              </span>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-medium transition-colors"
                title="Copy code"
              >
                {copied ? (
                  <>
                    <FiCheck className="text-green-400" size={14} />
                    <span className="text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Code Body */}
          <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono leading-relaxed">
            <SyntaxHighlighter
              language={currentSnippet.language}
              style={vs2015}
              customStyle={{
                background: "transparent",
                padding: "0",
                margin: "0",
                fontSize: "0.85rem",
              }}
            >
              {currentSnippet.code}
            </SyntaxHighlighter>
          </div>

          {/* Terminal Footer Highlights */}
          <div className="px-6 py-4 bg-gray-950/80 border-t border-gray-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-blue-400 shrink-0" />
              <span>Strict TypeScript & Static Types</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-emerald-400 shrink-0" />
              <span>Automated CI/CD & Testing</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="text-purple-400 shrink-0" />
              <span>Zero-Downtime Container Deployments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildTools;
