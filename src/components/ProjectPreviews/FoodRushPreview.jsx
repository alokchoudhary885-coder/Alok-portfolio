import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Star, Clock, Bike, Check, Utensils, ChevronRight } from 'lucide-react';

const MENU_ITEMS = [
  { id: '1', name: 'Margherita Pizza', price: 299, rating: '4.9', emoji: '🍕', category: 'Italian' },
  { id: '2', name: 'Gourmet Truffle Burger', price: 249, rating: '4.8', emoji: '🍔', category: 'Fast Food' },
  { id: '3', name: 'Tokyo Salmon Sushi', price: 389, rating: '4.9', emoji: '🍣', category: 'Japanese' }
];

const ORDER_STEPS = [
  { label: 'Order Confirmed', time: '12:30 PM', done: true },
  { label: 'Kitchen Preparing', time: '12:34 PM', done: true },
  { label: 'Out for Delivery', time: '12:42 PM', active: true }
];

export default function FoodRushPreview() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);
  const [cartCount, setCartCount] = useState(2);
  const [cartTotal, setCartTotal] = useState(548);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % 4;
        if (next === 1) {
          setSelectedItem(1);
          setCartCount(3);
          setCartTotal(797);
        } else if (next === 3) {
          setSelectedItem(2);
          setCartCount(2);
          setCartTotal(688);
        } else if (next === 0) {
          setSelectedItem(0);
          setCartCount(2);
          setCartTotal(548);
        }
        return next;
      });
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full rounded-xl overflow-hidden border border-slate-800/90 bg-[#070b14] text-xs shadow-lg select-none">
      {/* Top Application Bar */}
      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-[11px]">
            FR
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-white tracking-tight text-[11px]">FoodRush</span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-orange-500/10 text-orange-400 font-mono border border-orange-500/20">
              MERN
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Live Order Indicator */}
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Razorpay Live</span>
          </div>

          {/* Cart Icon & Badge */}
          <div className="relative flex items-center justify-center p-1 rounded-md bg-slate-800/80 text-slate-300">
            <ShoppingBag className="w-3.5 h-3.5 text-blue-400" />
            <motion.span
              key={cartCount}
              initial={{ scale: 0.6 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-orange-500 text-white font-bold text-[8px] flex items-center justify-center"
            >
              {cartCount}
            </motion.span>
          </div>
        </div>
      </div>

      {/* Main Preview Content */}
      <div className="p-3.5 space-y-3">
        {/* Menu Items List */}
        <div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 mb-2 font-mono uppercase tracking-wider">
            <span>Trending Kitchen Menu</span>
            <span className="text-orange-400">Jaipur Central Hub</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {MENU_ITEMS.map((item, idx) => {
              const isSelected = selectedItem === idx;
              return (
                <motion.div
                  key={item.id}
                  animate={{
                    borderColor: isSelected ? 'rgba(249, 115, 22, 0.6)' : 'rgba(51, 65, 85, 0.6)',
                    backgroundColor: isSelected ? 'rgba(249, 115, 22, 0.08)' : 'rgba(15, 23, 42, 0.6)'
                  }}
                  transition={{ duration: 0.3 }}
                  className="p-2 rounded-lg border flex flex-col justify-between relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-base">{item.emoji}</span>
                      <div className="flex items-center gap-0.5 text-[9px] text-amber-400 font-mono">
                        <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                        <span>{item.rating}</span>
                      </div>
                    </div>
                    <div className="font-medium text-white text-[11px] truncate leading-tight">
                      {item.name}
                    </div>
                    <div className="text-[9px] text-slate-400 font-mono">{item.category}</div>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-800/60">
                    <span className="text-[11px] font-bold text-orange-400 font-mono">₹{item.price}</span>
                    <span className={`text-[9px] px-1 py-0.2 rounded font-mono ${
                      isSelected ? 'bg-orange-500 text-white' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {isSelected ? '+Added' : 'Add'}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Live Tracking & Cart Progress */}
        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800/80">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5 text-slate-300 text-[10px] font-medium">
              <Bike className="w-3.5 h-3.5 text-orange-400 shrink-0 animate-bounce" />
              <span>Express Delivery in Progress</span>
            </div>
            <div className="text-[10px] font-mono text-slate-400">
              Total: <span className="text-emerald-400 font-semibold font-mono">₹{cartTotal}</span>
            </div>
          </div>

          {/* Stepper Progress Bar */}
          <div className="relative pt-1 pb-1">
            <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-400 rounded-full"
                animate={{
                  width: activeStep === 0 ? '33%' : activeStep === 1 ? '66%' : activeStep === 2 ? '85%' : '100%'
                }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </div>

            <div className="flex items-center justify-between mt-2 text-[9px] font-mono">
              <span className="flex items-center gap-1 text-emerald-400">
                <Check className="w-2.5 h-2.5" /> Order Placed
              </span>
              <span className={`flex items-center gap-1 ${activeStep >= 1 ? 'text-amber-400' : 'text-slate-500'}`}>
                <Utensils className="w-2.5 h-2.5" /> Kitchen Cooking
              </span>
              <span className={`flex items-center gap-1 ${activeStep >= 2 ? 'text-orange-400 font-semibold' : 'text-slate-500'}`}>
                <Clock className="w-2.5 h-2.5" /> Out for Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
