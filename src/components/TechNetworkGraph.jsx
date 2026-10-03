import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Network, Sparkles } from 'lucide-react';

const NODES = [
  { id: 'react', name: 'React.js', x: 260, y: 70, category: 'Frontend', primary: true },
  { id: 'node', name: 'Node.js', x: 440, y: 70, category: 'Backend', primary: true },
  { id: 'js', name: 'JavaScript', x: 150, y: 130, category: 'Languages' },
  { id: 'ts', name: 'TypeScript', x: 220, y: 175, category: 'Languages' },
  { id: 'tailwind', name: 'Tailwind CSS', x: 130, y: 60, category: 'Frontend' },
  { id: 'express', name: 'Express.js', x: 550, y: 120, category: 'Backend' },
  { id: 'mongo', name: 'MongoDB', x: 470, y: 180, category: 'Database' },
  { id: 'postgres', name: 'PostgreSQL', x: 570, y: 185, category: 'Database' },
  { id: 'java', name: 'Java (DSA)', x: 350, y: 185, category: 'Languages' },
  { id: 'socket', name: 'Socket.IO', x: 350, y: 40, category: 'Real-time' },
  { id: 'gemini', name: 'Gemini AI', x: 350, y: 110, category: 'AI' }
];

const EDGES = [
  { source: 'react', target: 'js' },
  { source: 'react', target: 'ts' },
  { source: 'react', target: 'tailwind' },
  { source: 'react', target: 'socket' },
  { source: 'react', target: 'gemini' },
  { source: 'react', target: 'node' },
  { source: 'node', target: 'express' },
  { source: 'node', target: 'mongo' },
  { source: 'node', target: 'postgres' },
  { source: 'node', target: 'socket' },
  { source: 'node', target: 'gemini' },
  { source: 'express', target: 'mongo' },
  { source: 'mongo', target: 'postgres' },
  { source: 'js', target: 'ts' },
  { source: 'java', target: 'ts' },
  { source: 'java', target: 'mongo' },
  { source: 'gemini', target: 'ts' }
];

export default function TechNetworkGraph() {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Helper to test if a node is connected to hoveredNode
  const isConnected = (nodeId) => {
    if (!hoveredNode) return true;
    if (nodeId === hoveredNode) return true;
    return EDGES.some(
      (e) => (e.source === hoveredNode && e.target === nodeId) || (e.target === hoveredNode && e.source === nodeId)
    );
  };

  const isEdgeActive = (edge) => {
    if (!hoveredNode) return false;
    return edge.source === hoveredNode || edge.target === hoveredNode;
  };

  const getNodeCoords = (id) => NODES.find((n) => n.id === id);

  return (
    <div className="w-full rounded-2xl border border-slate-800/90 bg-[#060a14] p-4 sm:p-6 mb-10 overflow-hidden relative shadow-xl">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b border-slate-800/80 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
              Interactive Ecosystem Architecture
            </h4>
            <span className="text-[10px] text-slate-400 font-mono">
              Hover nodes to trace stack relations &amp; data pipelines
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
          <span className="inline-flex items-center gap-1 text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>MERN Core</span>
          </span>
          <span>•</span>
          <span className="text-emerald-400">Live Relations</span>
        </div>
      </div>

      {/* SVG Interactive Canvas */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[24/8] max-h-[250px]">
        <svg
          viewBox="70 20 560 190"
          className="w-full h-full select-none"
        >
          {/* Connection Lines */}
          <g>
            {EDGES.map((edge, idx) => {
              const src = getNodeCoords(edge.source);
              const tgt = getNodeCoords(edge.target);
              if (!src || !tgt) return null;

              const active = isEdgeActive(edge);
              const dimmed = hoveredNode && !active;

              return (
                <motion.line
                  key={`${edge.source}-${edge.target}-${idx}`}
                  x1={src.x}
                  y1={src.y}
                  x2={tgt.x}
                  y2={tgt.y}
                  stroke={active ? '#60a5fa' : '#334155'}
                  strokeWidth={active ? 2 : 1}
                  strokeDasharray={active ? 'none' : '3 3'}
                  opacity={dimmed ? 0.15 : active ? 0.9 : 0.4}
                  transition={{ duration: 0.2 }}
                />
              );
            })}
          </g>

          {/* Nodes */}
          {NODES.map((node) => {
            const isHovered = hoveredNode === node.id;
            const connected = isConnected(node.id);
            const dimmed = hoveredNode && !connected;

            return (
              <g
                key={node.id}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Node Outer Glow on Hover */}
                {isHovered && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={node.primary ? 22 : 18}
                    fill="#3b82f6"
                    opacity={0.2}
                    className="animate-pulse"
                  />
                )}

                {/* Node Body */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.primary ? 14 : 10}
                  fill={
                    isHovered
                      ? '#3b82f6'
                      : connected && hoveredNode
                      ? '#1e3a8a'
                      : node.primary
                      ? '#0f172a'
                      : '#0b1120'
                  }
                  stroke={
                    isHovered
                      ? '#93c5fd'
                      : connected && hoveredNode
                      ? '#60a5fa'
                      : node.primary
                      ? '#3b82f6'
                      : '#334155'
                  }
                  strokeWidth={node.primary ? 2 : 1.5}
                  opacity={dimmed ? 0.25 : 1}
                  style={{ transition: 'all 0.2s ease' }}
                />

                {/* Node Core Indicator */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.primary ? 4 : 2.5}
                  fill={isHovered ? '#ffffff' : node.primary ? '#60a5fa' : '#94a3b8'}
                  opacity={dimmed ? 0.3 : 1}
                />

                {/* Node Label */}
                <text
                  x={node.x}
                  y={node.y + (node.primary ? 20 : 16)}
                  textAnchor="middle"
                  fill={isHovered ? '#ffffff' : connected && hoveredNode ? '#e2e8f0' : '#94a3b8'}
                  fontSize={node.primary ? '9.5' : '8.5'}
                  fontFamily='"JetBrains Mono", monospace'
                  fontWeight={node.primary || isHovered ? 'bold' : 'normal'}
                  opacity={dimmed ? 0.2 : 1}
                  style={{ transition: 'fill 0.2s ease, opacity 0.2s ease' }}
                >
                  {node.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
