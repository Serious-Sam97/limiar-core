"use client";
import { useEffect, useRef } from "react";

export default function HeroOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;
    let t = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    const draw = () => {
      t += 0.006;
      const w = W(), h = H();
      const cx = w / 2, cy = h / 2;

      ctx.clearRect(0, 0, w, h);

      // Outer dim ring
      ctx.beginPath();
      ctx.arc(cx, cy, 160, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(202,255,0,0.06)";
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 120, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(202,255,0,0.04)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Rotating dashes
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.4);
      ctx.beginPath();
      ctx.arc(0, 0, 180, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(202,255,0,0.05)";
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 24]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-t * 0.25);
      ctx.beginPath();
      ctx.arc(0, 0, 210, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255,255,255,0.025)";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 30]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Core — wireframe sphere illusion
      const r = 80;
      // longitude lines
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI;
        const x1 = cx + Math.cos(angle + t * 0.2) * r;
        const x2 = cx + Math.cos(angle + t * 0.2 + Math.PI) * r;
        const cp1x = cx + Math.cos(angle + t * 0.2 + Math.PI / 2) * r * 0.6;
        ctx.beginPath();
        ctx.moveTo(x1, cy - r);
        ctx.quadraticCurveTo(cp1x, cy, x1, cy + r);
        ctx.strokeStyle = "rgba(202,255,0,0.12)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x2, cy - r);
        ctx.quadraticCurveTo(-cp1x + cx * 2, cy, x2, cy + r);
        ctx.strokeStyle = "rgba(202,255,0,0.08)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // latitude rings
      for (let i = 1; i < 5; i++) {
        const y = cy - r + (i / 5) * r * 2;
        const lr = Math.sqrt(r * r - (y - cy) * (y - cy));
        ctx.beginPath();
        ctx.ellipse(cx, y, lr * Math.abs(Math.sin(t * 0.15 + i)), lr * 0.25, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(202,255,0,0.1)";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }

      // Orbiting dot
      const ox = cx + Math.cos(t * 1.2) * 140;
      const oy = cy + Math.sin(t * 1.2) * 50;
      ctx.beginPath();
      ctx.arc(ox, oy, 3, 0, Math.PI * 2);
      ctx.fillStyle = "#CAFF00";
      ctx.fill();
      // dot glow
      const dg = ctx.createRadialGradient(ox, oy, 0, ox, oy, 14);
      dg.addColorStop(0, "rgba(202,255,0,0.4)");
      dg.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(ox, oy, 14, 0, Math.PI * 2);
      ctx.fillStyle = dg;
      ctx.fill();

      // Second orbiting dot, opposite phase
      const ox2 = cx + Math.cos(t * 0.7 + Math.PI) * 170;
      const oy2 = cy + Math.sin(t * 0.7 + Math.PI) * 40;
      ctx.beginPath();
      ctx.arc(ox2, oy2, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255,0.5)";
      ctx.fill();

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
