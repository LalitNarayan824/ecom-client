"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ProBloomCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        let frame = 0;
        let animationFrameId;
        const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            mouse.targetX = canvas.width / 2;
            mouse.targetY = canvas.height / 2;
        };

        const drawPetal = (x, y, angle, width, length, layerIndex, tilt) => {
            ctx.save();
            ctx.translate(x, y);
            ctx.rotate(angle);
            
            // 1. Create Gradient: Darker at the center, glowing at the tip
            const petalGrad = ctx.createLinearGradient(0, 0, 0, -length);
            const hue = 330 - (layerIndex * 5); // Shifts pink to purple slightly
            petalGrad.addColorStop(0, `hsla(${hue}, 80%, 20%, 0.8)`); 
            petalGrad.addColorStop(0.5, `hsla(${hue}, 80%, 40%, 0.6)`);
            petalGrad.addColorStop(1, `hsla(${hue}, 90%, 70%, 0.3)`);

            ctx.beginPath();
            ctx.moveTo(0, 0);
            // 2. Shape with curvature influenced by "tilt" (opening/closing)
            ctx.bezierCurveTo(-width, -length * (0.3 + tilt), -width, -length, 0, -length);
            ctx.bezierCurveTo(width, -length, width, -length * (0.3 + tilt), 0, 0);
            
            ctx.fillStyle = petalGrad;
            ctx.fill();
            
            // Add a soft rim light to the edge
            ctx.strokeStyle = `hsla(${hue}, 100%, 80%, 0.15)`;
            ctx.lineWidth = 1;
            ctx.stroke();
            
            ctx.restore();
        };

        const animate = () => {
            frame += 0.004;
            // Smooth mouse easing
            mouse.x += (mouse.targetX - mouse.x) * 0.05;
            mouse.y += (mouse.targetY - mouse.y) * 0.05;

            ctx.fillStyle = '#020617';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const centerX = canvas.width / 2;
            const centerY = canvas.height / 2;

            // 3. Turbulence: Combining multiple sines for unpredictable sway
            const turbulence = Math.sin(frame * 1.5) * Math.cos(frame * 0.7) * 0.15;
            const mouseDist = Math.hypot(mouse.x - centerX, mouse.y - centerY) / 600;
            const openingEffect = Math.min(mouseDist, 0.4);

            // Layered Petal System (7 layers for maximum lushness)
            for (let layer = 7; layer >= 1; layer--) {
                const petalCount = 4 + (layer * 4);
                const layerScale = layer / 7;
                const length = 320 * layerScale;
                const width = 100 * layerScale;
                
                // Add staggered rotation per layer
                const layerRotation = frame * (layer % 2 === 0 ? 0.2 : -0.15) + (turbulence * (8 - layer));

                for (let i = 0; i < petalCount; i++) {
                    const angle = (i * Math.PI * 2) / petalCount + layerRotation;
                    
                    // Parallax offset: outer petals move more with mouse
                    const offsetX = (mouse.x - centerX) * (0.08 * layerScale);
                    const offsetY = (mouse.y - centerY) * (0.08 * layerScale);

                    drawPetal(
                        centerX + offsetX, 
                        centerY + offsetY, 
                        angle, 
                        width, 
                        length, 
                        layer, 
                        openingEffect + turbulence
                    );
                }
            }

            // 4. Glowing Core (Stigma)
            const coreX = centerX + (mouse.x - centerX) * 0.03;
            const coreY = centerY + (mouse.y - centerY) * 0.03;
            
            const coreGrad = ctx.createRadialGradient(coreX, coreY, 0, coreX, coreY, 30);
            coreGrad.addColorStop(0, '#fef08a');
            coreGrad.addColorStop(0.5, '#f59e0b');
            coreGrad.addColorStop(1, 'transparent');

            ctx.beginPath();
            ctx.arc(coreX, coreY, 30, 0, Math.PI * 2);
            ctx.fillStyle = coreGrad;
            ctx.fill();
            
            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', handleMouseMove);
        resize();
        animate();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

const ProBloomHero = () => {
    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#020617]">
            <ProBloomCanvas />
            
            {/* Soft Ambient Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,#020617_90%)] z-10" />

            <div className="relative z-20 text-center select-none pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    <h1 className="text-7xl md:text-9xl font-extralight text-white tracking-[0.4em] uppercase opacity-90">
                        Bloom
                    </h1>
                    <div className="h-px w-24 bg-pink-500/50 mx-auto mt-6 mb-4" />
                    <p className="text-pink-200/40 font-light tracking-[0.2em] uppercase text-xs">
                        Interactive Generative Design
                    </p>
                </motion.div>
            </div>
            
            {/* Custom Cursor Tip */}
            <div className="absolute bottom-10 z-20 text-white/20 text-[10px] tracking-widest uppercase animate-pulse">
                Move mouse to influence the wind
            </div>
        </div>
    );
};

export default ProBloomHero;