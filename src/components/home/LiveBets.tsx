"use client";

import { useState } from "react";
import { liveBetsData } from "@/lib/homeData";

export default function LiveBets() {
  const [activeTab, setActiveTab] = useState<"casino" | "sports">("casino");

  return (
    <section className="py-8">
      <h2 className="text-white font-semibold text-xl md:text-2xl text-center mb-6">
        Únete a los ganadores afortunados, ¡regístrate ahora!
      </h2>

      <div className="flex justify-center gap-2 mb-6">
        <button
          onClick={() => setActiveTab("casino")}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === "casino"
              ? "bg-white text-black"
              : "bg-gray-card text-white/60 hover:text-white"
          }`}
        >
          Apuestas casino
        </button>
        <button
          onClick={() => setActiveTab("sports")}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
            activeTab === "sports"
              ? "bg-white text-black"
              : "bg-gray-card text-white/60 hover:text-white"
          }`}
        >
          Apuestas deportivas
        </button>
      </div>

      <div className="bg-gray-bg rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-border">
                <th className="text-left text-white/40 font-medium px-4 py-3 w-10">
                  #
                </th>
                <th className="text-left text-white/40 font-medium px-4 py-3">
                  Evento
                </th>
                <th className="text-left text-white/40 font-medium px-4 py-3">
                  Hora
                </th>
                <th className="text-left text-white/40 font-medium px-4 py-3">
                  ID Usuario
                </th>
                <th className="text-left text-white/40 font-medium px-4 py-3">
                  Cuotas
                </th>
                <th className="text-left text-white/40 font-medium px-4 py-3">
                  Monto
                </th>
              </tr>
            </thead>
            <tbody>
              {liveBetsData.map((bet) => (
                <tr
                  key={bet.id}
                  className="border-b border-gray-border/50 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-4 py-3 text-accent font-semibold">
                    {bet.id}
                  </td>
                  <td className="px-4 py-3 text-white font-medium">
                    {bet.event}
                  </td>
                  <td className="px-4 py-3 text-white/60 whitespace-nowrap">
                    {bet.time}
                  </td>
                  <td className="px-4 py-3 text-white/60">{bet.userId}</td>
                  <td className="px-4 py-3 text-white/60">{bet.odds}</td>
                  <td className="px-4 py-3 text-accent">{bet.betAmount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
