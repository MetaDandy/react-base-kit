import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["./src/index.ts"], // Archivo de entrada
    bundle: true, // Empaquetar el código en un solo archivo
    sourcemap: true, // Incluir mapas de fuente
    outfile: "dist/index.js", // Salida en el directorio dist
    format: "esm", // Puedes cambiar a 'cjs' si prefieres CommonJS
    platform: "browser", // Para código que se ejecutará en navegador
    target: "esnext", // Usa ESNext para compatibilidad con navegadores modernos
    external: ["react", "react-dom"], // Excluir react y react-dom de la librería
    plugins: [],
    tsconfig: "./tsconfig.json", // Asegúrate de que tu archivo tsconfig.json esté configurado correctamente
  })
  .catch(() => process.exit(1));
