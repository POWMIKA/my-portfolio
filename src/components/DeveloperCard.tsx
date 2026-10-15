"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Zap,
  CheckCircle2,
} from "lucide-react";

const technologies = [
  {
    name: "React / Next.js",
    icon: Code2,
  },
  {
    name: "Node.js / Express",
    icon: Server,
  },
  {
    name: "PostgreSQL / MongoDB",
    icon: Database,
  },
];

export default function DeveloperCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Glow */}
      <div className="absolute -inset-4 rounded-3xl bg-violet-500/10 blur-3xl" />

      {/* Card */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl">

        {/* Top bar */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
              <Code2 size={20} />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Developer Profile
              </p>

              <p className="text-xs text-gray-500">
                Full Stack Engineering
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/5 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            <span className="text-xs text-green-400">
              Active
            </span>
          </div>
        </div>

        {/* Code block */}
        <div className="mb-6 rounded-2xl border border-white/5 bg-black/50 p-5 font-mono text-sm">
          <p className="text-gray-500">
            {"// currently building"}
          </p>

          <p className="mt-2">
            <span className="text-violet-400">const</span>{" "}
            <span className="text-blue-300">developer</span>{" "}
            = {"{"}
          </p>

          <p className="pl-5">
            <span className="text-gray-400">role:</span>{" "}
            <span className="text-green-300">
              &quot;Full Stack Engineer&quot;
            </span>
          </p>

          <p className="pl-5">
            <span className="text-gray-400">focus:</span>{" "}
            <span className="text-green-300">
              &quot;Scalable Systems&quot;
            </span>
          </p>

          <p className="pl-5">
            <span className="text-gray-400">stack:</span>{" "}
            <span className="text-green-300">
              &quot;Modern Web&quot;
            </span>
          </p>

          <p>
            {"}"}
          </p>
        </div>

        {/* Technologies */}
        <div className="space-y-3">
          {technologies.map((technology, index) => {
            const Icon = technology.icon;

            return (
              <motion.div
                key={technology.name}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.6 + index * 0.1,
                }}
                className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <Icon size={17} className="text-gray-400" />

                  <span className="text-sm text-gray-300">
                    {technology.name}
                  </span>
                </div>

                <CheckCircle2
                  size={16}
                  className="text-green-400"
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-5">
          <Zap size={16} className="text-yellow-400" />

          <span className="text-xs text-gray-500">
            Building production-ready applications
          </span>
        </div>
      </div>
    </motion.div>
  );
}