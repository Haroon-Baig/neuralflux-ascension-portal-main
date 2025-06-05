
import { useEffect, useRef } from 'react';

const CubeAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 300;
    canvas.height = 300;

    let angle = 0;
    const cubeSize = 80;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Cube vertices (x, y, z)
    const vertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1]
    ];

    // Edges: pairs of vertices indices
    const edges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // back face
      [4, 5], [5, 6], [6, 7], [7, 4], // front face
      [0, 4], [1, 5], [2, 6], [3, 7]  // connecting edges
    ];

    const project = (x: number, y: number, z: number) => {
      const scale = 400 / (400 - z * cubeSize);
      return {
        x: x * cubeSize * scale + centerX,
        y: y * cubeSize * scale + centerY
      };
    };

    const rotateX = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const newY = y * cos - z * sin;
      const newZ = y * sin + z * cos;
      return { x, y: newY, z: newZ };
    };

    const rotateY = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const newX = x * cos - z * sin;
      const newZ = x * sin + z * cos;
      return { x: newX, y, z: newZ };
    };

    const rotateZ = (x: number, y: number, z: number, angle: number) => {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      const newX = x * cos - y * sin;
      const newY = x * sin + y * cos;
      return { x: newX, y: newY, z };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Rotate and project vertices
      const rotatedVertices = vertices.map(vertex => {
        // Apply rotations
        let rotated = rotateY(vertex[0], vertex[1], vertex[2], angle);
        rotated = rotateX(rotated.x, rotated.y, rotated.z, angle * 0.7);
        rotated = rotateZ(rotated.x, rotated.y, rotated.z, angle * 0.3);
        
        // Project 3D to 2D
        return project(rotated.x, rotated.y, rotated.z);
      });

      // Draw edges
      edges.forEach(edge => {
        ctx.beginPath();
        ctx.moveTo(rotatedVertices[edge[0]].x, rotatedVertices[edge[0]].y);
        ctx.lineTo(rotatedVertices[edge[1]].x, rotatedVertices[edge[1]].y);
        ctx.strokeStyle = '#0EA5E9';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      // Draw vertices
      rotatedVertices.forEach(vertex => {
        ctx.beginPath();
        ctx.arc(vertex.x, vertex.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = '#33C3F0';
        ctx.fill();
      });

      angle += 0.005;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="w-[300px] h-[300px]" />;
};

export default CubeAnimation;
