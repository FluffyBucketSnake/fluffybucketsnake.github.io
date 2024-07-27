<script>
	import AtomButton from '$lib/components/atoms/atom-button.svelte';
	import LayoutFooter from '$lib/components/layout/layout-footer.svelte';
	import LayoutSidebar from '$lib/components/layout/layout-sidebar.svelte';
	import IconMenu from 'virtual:icons/pixelent/menu-24-regular';
	import { useProgressiveEnhancement } from '$lib/composables/progressive-enhancement.svelte';
	import { t } from '$lib/i18n';
	import { format } from 'date-fns/fp';

	const { data } = $props();

	const formatPostDate = format('PPP');

	const pe = useProgressiveEnhancement();
</script>

<div class="flex flex-col min-h-screen lg:flex-row">
	{#if !pe.hasJs}
		<LayoutSidebar static class="flex-0 border-b lg:border-b-0 lg:border-r border-carbon" />
	{:else}
		<LayoutSidebar>
			{#snippet activator({ onclick })}
				<AtomButton
					aria-label={$t('sidebar.labels.open')}
					color="primary"
					shadow="8px"
					class="fixed left-2 top-2 p-2 z-10"
					{onclick}
				>
					<IconMenu />
				</AtomButton>
			{/snippet}
		</LayoutSidebar>
	{/if}
	<div class="flex-1 flex flex-col">
		<header
			class="border-b border-primary-400 p-8 bg-primary-500 flex flex-col gap-8 items-center text-center {pe.hasJs &&
				'pt-15'}"
		>
			<h1 class="font-header text-4xl drop-shadow-8px">Personal Blog</h1>
			<span>
				Read some updates on my projects & articles on new, weird and/or interesting topics
			</span>
		</header>
		<main class="flex-1 p-4 flex flex-col gap-4">
			<h2 class="font-header text-3xl drop-shadow-4px">Recent posts</h2>
			<ol class="contents">
				{#each data.posts as post (post.slug)}
					<li>
						<a href={post.path} class="group focus:outline-0">
							<article
								class="bg-matte shadow-2px group-hover:shadow-4px group-focus:shadow-4px group-active:shadow-1px flex flex-col p-2 gap-2 transition"
							>
								<h3
									class="font-header text-lg leading-none group-hover:text-primary-200 group-focus:text-primary-200 group-active:text-primary-400"
								>
									{post.title}
								</h3>
								<span class="text-xs text-fg/75 leading-none">{formatPostDate(post.date)}</span>
								<p class="text-sm flex-1 text-ellipsis overflow-hidden">{post.description}</p>
							</article>
						</a>
					</li>
				{/each}
			</ol>
		</main>
		<LayoutFooter />
	</div>
</div>
