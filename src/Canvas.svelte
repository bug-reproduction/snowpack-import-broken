<script lang="ts">
    import {Renderer} from './renderer';
    import {onMount} from 'svelte';
    
    let canvas: HTMLCanvasElement;
    onMount(() => {
      const ctx = canvas.getContext("2d");
      if (!ctx) {
          throw new Error("cannot create 2d context");
      }
      const renderer = new Renderer(ctx);
      renderer.render();
    });
  </script>
  
  <style>
    canvas {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: #000; /* #21262c; */ /*#1f253a;*/ /*#272e49;*/
      image-rendering: -moz-crisp-edges;
      image-rendering: -webkit-crisp-edges;
      image-rendering: pixelated;
      image-rendering: crisp-edges;
    }
  </style>
  
  <canvas bind:this={canvas} />
  