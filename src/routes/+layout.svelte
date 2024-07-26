<script lang="ts">
	import { useProgressiveEnhancementTrigger } from '$lib/composables/progressive-enhancement.svelte';
	import '../app.css';

	useProgressiveEnhancementTrigger();
</script>

<slot></slot>
