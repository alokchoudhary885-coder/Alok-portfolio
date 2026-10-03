import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowLeftRight, Play, RotateCcw } from 'lucide-react';

const BS_ARRAY = [12, 18, 24, 35, 48, 62, 75, 88, 96];

export default function AlgorithmVisualizer() {
  const [activeTab, setActiveTab] = useState('binary-search'); // 'binary-search' | 'two-pointer'
  
  // Binary Search State
  const [bsStep, setBsStep] = useState(0);
  const target = 62;

  // Binary search step frames:
  // Step 0: low=0, high=8, mid=4 (arr[4]=48 < 62 -> search right)
  // Step 1: low=5, high=8, mid=6 (arr[6]=75 > 62 -> search left)
  // Step 2: low=5, high=5, mid=5 (arr[5]=62 === target -> MATCH!)
  const bsFrames = [
    { low: 0, high: 8, mid: 4, status: 'arr[mid]=48 < 62 -> Search Right (low = mid + 1)' },
    { low: 5, high: 8, mid: 6, status: 'arr[mid]=75 > 62 -> Search Left (high = mid - 1)' },
    { low: 5, high: 6, mid: 5, status: 'arr[mid]=62 === Target -> Match Found! [O(log N)]' }
  ];

  // Two Pointer / Sort State
  const [tpStep, setTpStep] = useState(0);
  const tpBars = [35, 68, 22, 85, 44, 92, 55, 78];

  useEffect(() => {
    const timer = setInterval(() => {
      if (activeTab === 'binary-search') {
        setBsStep((prev) => (prev + 1) % bsFrames.length);
      } else {
        setTpStep((prev) => (prev + 1) % 4);
      }
    }, 2400);

    return () => clearInterval(timer);
  }, [activeTab]);

  const currentFrame = bsFrames[bsStep];

  return (
    <div className="w-full rounded-xl border border-slate-800 bg-[#080d1a] p-3.5 sm:p-4 my-4 select-none font-mono text-xs">
      {/* Visualizer Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800 text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="text-blue-400 font-bold">$</span>
          <span className="text-slate-300 font-medium">interactive-visualizer --track=runtime</span>
        </div>

        {/* Algorithm Tabs */}
        <div className="flex items-center gap-1 bg-slate-900 p-0.5 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveTab('binary-search')}
            className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'binary-search'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Search className="w-3 h-3" />
            <span>Binary Search</span>
          </button>

          <button
            onClick={() => setActiveTab('two-pointer')}
            className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-all cursor-pointer flex items-center gap-1 ${
              activeTab === 'two-pointer'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <ArrowLeftRight className="w-3 h-3" />
            <span>Two-Pointer Partition</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Binary Search Visualization */}
      {activeTab === 'binary-search' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>
              Target: <strong className="text-emerald-400 font-mono">62</strong> | Sorted Array [N=9]
            </span>
            <span className="text-blue-400 font-mono">
              Step [{bsStep + 1} / {bsFrames.length}]
            </span>
          </div>

          {/* Array Elements Grid */}
          <div className="grid grid-cols-9 gap-1 sm:gap-2">
            {BS_ARRAY.map((val, idx) => {
              const isMid = idx === currentFrame.mid;
              const isLow = idx === currentFrame.low;
              const isHigh = idx === currentFrame.high;
              const inRange = idx >= currentFrame.low && idx <= currentFrame.high;
              const isFound = bsStep === 2 && isMid;

              return (
                <div key={idx} className="flex flex-col items-center gap-1">
                  <motion.div
                    animate={{
                      scale: isMid ? 1.06 : 1,
                      backgroundColor: isFound
                        ? 'rgba(16, 185, 129, 0.25)'
                        : isMid
                        ? 'rgba(59, 130, 246, 0.25)'
                        : inRange
                        ? 'rgba(15, 23, 42, 0.8)'
                        : 'rgba(2, 6, 23, 0.4)',
                      borderColor: isFound
                        ? '#34d399'
                        : isMid
                        ? '#60a5fa'
                        : inRange
                        ? '#334155'
                        : '#1e293b'
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full aspect-square rounded-lg border flex items-center justify-center font-bold text-xs"
                  >
                    <span className={isFound ? 'text-emerald-300' : isMid ? 'text-blue-300' : inRange ? 'text-white' : 'text-slate-600'}>
                      {val}
                    </span>
                  </motion.div>

                  {/* Pointer Sub-labels */}
                  <span className="text-[9px] font-mono h-3.5">
                    {isFound ? (
                      <span className="text-emerald-400 font-bold">MATCH</span>
                    ) : isMid ? (
                      <span className="text-blue-400 font-bold">MID</span>
                    ) : isLow ? (
                      <span className="text-cyan-400">LOW</span>
                    ) : isHigh ? (
                      <span className="text-indigo-400">HIGH</span>
                    ) : (
                      <span className="text-slate-600">[{idx}]</span>
                    )}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Status Message */}
          <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[10px] flex items-center justify-between text-slate-300">
            <span className="text-slate-300">{currentFrame.status}</span>
            <span className="text-emerald-400 font-mono font-semibold shrink-0">Time: O(log N)</span>
          </div>
        </div>
      )}

      {/* Mode 2: Two-Pointer Partition Visualization */}
      {activeTab === 'two-pointer' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-[10px] text-slate-400">
            <span>Two-Pointer Symmetry Scan: Left=Idx({tpStep}) ⇄ Right=Idx({7 - tpStep})</span>
            <span className="text-indigo-400 font-mono">O(N) Linear Traversal</span>
          </div>

          {/* Bar Chart Visualization */}
          <div className="h-16 flex items-end justify-between gap-2 px-2 pt-2 border-b border-slate-800">
            {tpBars.map((height, i) => {
              const isLeftPtr = i === tpStep;
              const isRightPtr = i === 7 - tpStep;
              const isComparing = isLeftPtr || isRightPtr;

              return (
                <div key={i} className="flex-1 flex flex-col items-center h-full justify-end">
                  <motion.div
                    className={`w-full rounded-t transition-all ${
                      isComparing
                        ? 'bg-gradient-to-t from-blue-600 to-cyan-400 shadow-[0_0_8px_#38bdf8]'
                        : 'bg-slate-800/80'
                    }`}
                    style={{ height: `${height}%` }}
                  />
                  <span className={`text-[8px] font-mono mt-1 ${isComparing ? 'text-cyan-300 font-bold' : 'text-slate-500'}`}>
                    {height}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[10px] flex items-center justify-between text-slate-300">
            <span>
              Comparing pointers at indices {tpStep} and {7 - tpStep} • Validating invariant
            </span>
            <span className="text-blue-400 font-mono font-semibold shrink-0">Space: O(1)</span>
          </div>
        </div>
      )}
    </div>
  );
}
