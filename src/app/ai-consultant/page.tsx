"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Camera,
  Upload,
  Scan,
  CheckCircle2,
  TrendingUp,
  ShoppingBag,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Star,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

type Step = "upload" | "analyzing" | "results" | "dashboard";

/* ─── Mock Analysis Data ─────────────────────────────── */
const mockAnalysis = {
  skinTone:       { score: 82, label: "Medium-Warm",    status: "Healthy" },
  hydration:      { score: 68, label: "Moderate",       status: "Could Improve" },
  clarity:        { score: 74, label: "Good",           status: "Healthy" },
  evenness:       { score: 61, label: "Uneven",         status: "Needs Attention" },
  darkSpots:      { count: 3,  severity: "Mild",        status: "Treatable" },
};

const mockRecommendations = [
  {
    rank: 1,
    name: "C-Suite Skin Lightening Cream",
    match: 98,
    reason: "Directly addresses dark spots and uneven tone identified in your scan.",
    price: "$68",
  },
  {
    rank: 2,
    name: "Brightening Vitamin C Serum",
    match: 91,
    reason: "Boosts hydration and antioxidant protection for your skin tone profile.",
    price: "$54",
    comingSoon: true,
  },
];

const mockProgress = [
  { week: "Week 0",  tone: 61, hydration: 68, clarity: 74 },
  { week: "Week 2",  tone: 65, hydration: 71, clarity: 77 },
  { week: "Week 4",  tone: 72, hydration: 74, clarity: 81 },
  { week: "Week 6",  tone: 78, hydration: 76, clarity: 85 },
  { week: "Week 8",  tone: 82, hydration: 79, clarity: 88 },
];

/* ─── Progress bar ───────────────────────────────────── */
function ScoreBar({ label, score, color = "#C9A15D" }: { label: string; score: number; color?: string }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span style={{ color: "rgba(58,45,45,0.70)" }}>{label}</span>
        <span className="font-semibold" style={{ color }}>{score}%</span>
      </div>
      <div className="w-full h-2 rounded-full" style={{ background: "rgba(58,45,45,0.08)" }}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="h-2 rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}CC)` }}
        />
      </div>
    </div>
  );
}

/* ─── Upload Step ────────────────────────────────────── */
function UploadStep({ onUpload }: { onUpload: () => void }) {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="max-w-xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#E88C9A" }}>
          Step 1 of 3
        </p>
        <h2
          className="font-playfair font-bold leading-tight mb-4"
          style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", color: "#3A2D2D" }}
        >
          Upload Your Selfie
        </h2>
        <p className="text-sm leading-relaxed mb-10" style={{ color: "rgba(58,45,45,0.62)" }}>
          Take or upload a clear, well-lit photo of your face for the most accurate
          skin analysis. Your image is processed privately and never stored.
        </p>

        {/* Upload zone */}
        <div
          className="rounded-3xl border-2 border-dashed p-12 cursor-pointer transition-all duration-300 mb-6"
          style={{ borderColor: "rgba(201,161,93,0.35)", background: "rgba(201,161,93,0.04)" }}
          onClick={() => fileRef.current?.click()}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "#C9A15D";
            (e.currentTarget as HTMLDivElement).style.background = "rgba(201,161,93,0.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,161,93,0.35)";
            (e.currentTarget as HTMLDivElement).style.background = "rgba(201,161,93,0.04)";
          }}
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ background: "rgba(201,161,93,0.10)", border: "1.5px solid rgba(201,161,93,0.25)" }}
          >
            <Camera size={32} style={{ color: "#C9A15D" }} />
          </div>
          <p className="font-medium mb-1" style={{ color: "#3A2D2D" }}>
            Click to upload a photo
          </p>
          <p className="text-xs" style={{ color: "rgba(58,45,45,0.45)" }}>
            JPG, PNG or HEIC · Max 10MB
          </p>
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onUpload} />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="btn-primary flex items-center gap-2 justify-center" onClick={onUpload}>
            <Upload size={16} />
            Upload Photo
          </button>
          <button className="btn-outline flex items-center gap-2 justify-center" onClick={onUpload}>
            <Camera size={16} />
            Use Demo Mode
          </button>
        </div>

        <p className="text-xs mt-5" style={{ color: "rgba(58,45,45,0.40)" }}>
          🔒 Your privacy is protected. Images are not stored or shared.
        </p>
      </motion.div>
    </div>
  );
}

/* ─── Analyzing Step ─────────────────────────────────── */
function AnalyzingStep() {
  const checks = [
    "Detecting skin tone",
    "Mapping dark spots",
    "Analyzing hydration",
    "Assessing evenness",
    "Generating recommendations",
  ];
  return (
    <div className="max-w-md mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8"
          style={{ background: "linear-gradient(135deg,#FAE8E8,#FAF7F2)", border: "2px solid rgba(201,161,93,0.25)" }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Scan size={36} style={{ color: "#C9A15D" }} />
          </motion.div>
        </div>

        <h2 className="font-playfair text-2xl mb-2" style={{ color: "#3A2D2D" }}>
          Analyzing Your Skin
        </h2>
        <p className="text-sm mb-10" style={{ color: "rgba(58,45,45,0.55)" }}>
          Our AI is processing your photo…
        </p>

        <div className="space-y-3 text-left">
          {checks.map((check, i) => (
            <motion.div
              key={check}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.5 }}
              className="flex items-center gap-3 text-sm"
              style={{ color: "rgba(58,45,45,0.70)" }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.5 + 0.3 }}
              >
                <CheckCircle2 size={16} style={{ color: "#C9A15D" }} />
              </motion.div>
              {check}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Results Step ───────────────────────────────────── */
function ResultsStep({ onViewDashboard }: { onViewDashboard: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto"
    >
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#E88C9A" }}>
          Analysis Complete
        </p>
        <h2 className="font-playfair font-bold text-3xl mb-3" style={{ color: "#3A2D2D" }}>
          Your Skin Profile
        </h2>
        <p className="text-sm" style={{ color: "rgba(58,45,45,0.60)" }}>
          Based on AI analysis · Results are illustrative in demo mode
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Scores */}
        <div
          className="rounded-2xl p-6 space-y-5"
          style={{ background: "#FFFFFF", border: "1px solid rgba(58,45,45,0.08)", boxShadow: "0 4px 20px rgba(58,45,45,0.06)" }}
        >
          <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#3A2D2D" }}>
            Skin Assessment
          </h3>
          <ScoreBar label="Skin Tone Evenness" score={mockAnalysis.evenness.score} />
          <ScoreBar label="Hydration Level"    score={mockAnalysis.hydration.score} />
          <ScoreBar label="Skin Clarity"        score={mockAnalysis.clarity.score} />
          <ScoreBar label="Overall Radiance"    score={mockAnalysis.skinTone.score} />

          <div
            className="mt-4 pt-4 border-t text-sm"
            style={{ borderColor: "rgba(58,45,45,0.07)" }}
          >
            <div className="flex justify-between">
              <span style={{ color: "rgba(58,45,45,0.55)" }}>Dark spots detected</span>
              <span
                className="font-semibold px-2 py-0.5 rounded-full text-xs"
                style={{ background: "rgba(232,140,154,0.10)", color: "#E88C9A" }}
              >
                {mockAnalysis.darkSpots.count} · {mockAnalysis.darkSpots.severity}
              </span>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div
          className="rounded-2xl p-6"
          style={{ background: "#FFFFFF", border: "1px solid rgba(58,45,45,0.08)", boxShadow: "0 4px 20px rgba(58,45,45,0.06)" }}
        >
          <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#3A2D2D" }}>
            Recommended For You
          </h3>
          <div className="space-y-4">
            {mockRecommendations.map((rec) => (
              <div
                key={rec.rank}
                className="rounded-xl p-4"
                style={{ background: "#FAF7F2", border: "1px solid rgba(58,45,45,0.07)" }}
              >
                <div className="flex items-start justify-between mb-1.5">
                  <p className="font-medium text-sm" style={{ color: "#3A2D2D" }}>{rec.name}</p>
                  <span
                    className="text-[9px] font-bold px-2 py-0.5 rounded-full ml-2 flex-shrink-0"
                    style={{ background: "rgba(201,161,93,0.12)", color: "#C9A15D" }}
                  >
                    {rec.match}% match
                  </span>
                </div>
                <p className="text-xs mb-2" style={{ color: "rgba(58,45,45,0.55)" }}>{rec.reason}</p>
                <div className="flex items-center justify-between">
                  <span className="price-shimmer font-bold text-sm">{rec.price}</span>
                  {rec.comingSoon ? (
                    <span className="text-[9px] uppercase tracking-wider" style={{ color: "rgba(58,45,45,0.40)" }}>Coming Soon</span>
                  ) : (
                    <Link href="/shop" className="text-xs font-semibold flex items-center gap-1" style={{ color: "#C9A15D" }}>
                      Shop <ChevronRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Routine */}
      <div
        className="rounded-2xl p-6 mb-6"
        style={{ background: "linear-gradient(135deg,#FAE8E8,#FAF7F2)", border: "1px solid rgba(201,161,93,0.15)" }}
      >
        <h3 className="font-semibold text-sm uppercase tracking-wider mb-4" style={{ color: "#3A2D2D" }}>
          Your Personalized Routine
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { time: "Morning", steps: ["Gentle cleanser", "C-Suite Lightening Cream", "SPF 30+"] },
            { time: "Evening", steps: ["Double cleanse", "C-Suite Lightening Cream", "Nourishing moisturizer"] },
          ].map((routine) => (
            <div key={routine.time} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.70)" }}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#C9A15D" }}>{routine.time}</p>
              <ol className="space-y-1.5">
                {routine.steps.map((step, i) => (
                  <li key={i} className="text-xs flex items-center gap-2" style={{ color: "rgba(58,45,45,0.70)" }}>
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                      style={{ background: "rgba(201,161,93,0.15)", color: "#C9A15D" }}
                    >
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/shop" className="btn-primary flex items-center gap-2">
          <ShoppingBag size={16} /> Shop Recommendations
        </Link>
        <button className="btn-outline flex items-center gap-2" onClick={onViewDashboard}>
          <TrendingUp size={16} /> View Progress Dashboard
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Dashboard Step ─────────────────────────────────── */
function DashboardStep({ onRestart }: { onRestart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto"
    >
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#E88C9A" }}>
          Progress Tracking
        </p>
        <h2 className="font-playfair font-bold text-3xl mb-2" style={{ color: "#3A2D2D" }}>
          Your Journey
        </h2>
        <p className="text-sm" style={{ color: "rgba(58,45,45,0.55)" }}>8 weeks of projected progress</p>
      </div>

      {/* Progress chart (visual bars) */}
      <div
        className="rounded-2xl p-6 mb-6"
        style={{ background: "#FFFFFF", border: "1px solid rgba(58,45,45,0.08)", boxShadow: "0 4px 20px rgba(58,45,45,0.06)" }}
      >
        <h3 className="font-semibold text-sm uppercase tracking-wider mb-6" style={{ color: "#3A2D2D" }}>
          Skin Score Timeline
        </h3>
        <div className="grid grid-cols-5 gap-3">
          {mockProgress.map((point, i) => (
            <div key={point.week} className="text-center">
              <div className="h-28 flex items-end justify-center gap-1 mb-2">
                {[
                  { val: point.tone,      color: "#E88C9A" },
                  { val: point.hydration, color: "#C9A15D" },
                  { val: point.clarity,   color: "#6EBD8B" },
                ].map((bar, j) => (
                  <motion.div
                    key={j}
                    initial={{ height: 0 }}
                    animate={{ height: `${(bar.val / 100) * 7}rem` }}
                    transition={{ duration: 0.7, delay: i * 0.1 + j * 0.05 }}
                    className="w-3 rounded-t-sm"
                    style={{ background: bar.color, opacity: 0.80 }}
                  />
                ))}
              </div>
              <p className="text-[9px] uppercase tracking-wider" style={{ color: "rgba(58,45,45,0.45)" }}>
                {point.week.split(" ")[1]}
              </p>
            </div>
          ))}
        </div>
        <div className="flex gap-4 justify-center mt-4 text-[9px] uppercase tracking-wider" style={{ color: "rgba(58,45,45,0.50)" }}>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm inline-block" style={{ background: "#E88C9A" }} /> Tone</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm inline-block" style={{ background: "#C9A15D" }} /> Hydration</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm inline-block" style={{ background: "#6EBD8B" }} /> Clarity</span>
        </div>
      </div>

      {/* Achievement cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { icon: <Star size={20} />, title: "Week 4 Glow",   desc: "Visible brightening began",     unlocked: true },
          { icon: <Sparkles size={20} />, title: "Dark Spot Fade", desc: "Reduction noticeable",     unlocked: true },
          { icon: <TrendingUp size={20} />, title: "Radiance Peak", desc: "Best results at week 8",  unlocked: false },
        ].map((badge) => (
          <div
            key={badge.title}
            className="rounded-2xl p-4 text-center"
            style={{
              background: badge.unlocked ? "rgba(201,161,93,0.07)" : "rgba(58,45,45,0.04)",
              border: `1px solid ${badge.unlocked ? "rgba(201,161,93,0.20)" : "rgba(58,45,45,0.07)"}`,
              opacity: badge.unlocked ? 1 : 0.55,
            }}
          >
            <div className="flex justify-center mb-2" style={{ color: badge.unlocked ? "#C9A15D" : "rgba(58,45,45,0.30)" }}>
              {badge.icon}
            </div>
            <p className="text-xs font-semibold mb-0.5" style={{ color: "#3A2D2D" }}>{badge.title}</p>
            <p className="text-[10px]" style={{ color: "rgba(58,45,45,0.50)" }}>{badge.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/shop" className="btn-primary">Shop Products</Link>
        <button className="btn-outline flex items-center gap-2" onClick={onRestart}>
          <RotateCcw size={14} /> New Analysis
        </button>
      </div>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────── */
export default function AIConsultantPage() {
  const [step, setStep] = useState<Step>("upload");

  function handleUpload() {
    setStep("analyzing");
    setTimeout(() => setStep("results"), 3500);
  }

  const stepLabels: Record<Step, string> = {
    upload:    "Upload",
    analyzing: "Analyzing",
    results:   "Results",
    dashboard: "Dashboard",
  };
  const stepOrder: Step[] = ["upload", "analyzing", "results", "dashboard"];
  const currentIndex = stepOrder.indexOf(step);

  return (
    <main style={{ backgroundColor: "#FFFDFB" }}>
      <AnnouncementBar />
      <Navbar />

      {/* Header */}
      <section
        className="pt-16 pb-10 text-center px-6"
        style={{ background: "linear-gradient(180deg,#FAF7F2 0%,#FFFDFB 100%)" }}
      >
        <div className="container max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] mb-3" style={{ color: "#E88C9A" }}>
            AI-Powered · Free
          </p>
          <h1
            className="font-playfair font-bold leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem,4.5vw,3rem)", color: "#3A2D2D" }}
          >
            AI Beauty Consultant
          </h1>
          <p className="text-sm" style={{ color: "rgba(58,45,45,0.60)" }}>
            Personalized skincare analysis in seconds — powered by AI.
          </p>

          {/* Step tracker */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {stepOrder.map((s, i) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold transition-all duration-300"
                  style={
                    i < currentIndex
                      ? { background: "#C9A15D", color: "white" }
                      : i === currentIndex
                      ? { background: "#E88C9A", color: "white" }
                      : { background: "rgba(58,45,45,0.08)", color: "rgba(58,45,45,0.40)" }
                  }
                >
                  {i < currentIndex ? <CheckCircle2 size={13} /> : i + 1}
                </div>
                <span
                  className="text-[10px] uppercase tracking-wider hidden sm:block"
                  style={{ color: i === currentIndex ? "#3A2D2D" : "rgba(58,45,45,0.40)" }}
                >
                  {stepLabels[s]}
                </span>
                {i < stepOrder.length - 1 && (
                  <div className="w-6 h-px mx-1" style={{ background: i < currentIndex ? "#C9A15D" : "rgba(58,45,45,0.12)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step content */}
      <section className="pb-24 px-6">
        <div className="container">
          <AnimatePresence mode="wait">
            {step === "upload" && (
              <motion.div key="upload" exit={{ opacity: 0, y: -10 }}>
                <UploadStep onUpload={handleUpload} />
              </motion.div>
            )}
            {step === "analyzing" && (
              <motion.div key="analyzing" exit={{ opacity: 0, y: -10 }}>
                <AnalyzingStep />
              </motion.div>
            )}
            {step === "results" && (
              <motion.div key="results" exit={{ opacity: 0, y: -10 }}>
                <ResultsStep onViewDashboard={() => setStep("dashboard")} />
              </motion.div>
            )}
            {step === "dashboard" && (
              <motion.div key="dashboard" exit={{ opacity: 0, y: -10 }}>
                <DashboardStep onRestart={() => setStep("upload")} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
