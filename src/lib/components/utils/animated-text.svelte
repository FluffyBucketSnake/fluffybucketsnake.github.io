<script lang="ts">
	interface Props {
		text: string;
		class?: string;
		style?: (index: number, c: string) => string;
	}

	const { text, class: classNames, style }: Props = $props();
</script>

{#each text as char, i}
	<span class={classNames} style={style?.(i, char)}>{char}</span>
{/each}
