<script>
    export let data;
  </script>
  
  <h1>Welcome to SvelteKit with ISR</h1>
  <p>
    Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
  </p>
  <p>UUID generated from load function: <strong>{data.uuid}</strong></p>
  <p>BYPASS TOKEN to invalidate route: <strong>{data.byPassToken}</strong></p>