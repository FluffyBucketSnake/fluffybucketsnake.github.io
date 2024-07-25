<script lang="ts">
	import type { Snippet } from 'svelte';
	import { format } from 'date-fns/fp';
	import { t } from '$lib/i18n';
	import { appearOnScroll } from '$lib/actions/appearOnScroll';
	import LayoutSidebar from '$lib/components/layout/layout-sidebar.svelte';
	import DialogRenderError from '$lib/components/dialogs/dialog-render-error.svelte';
	import AtomButton from '$lib/components/atoms/atom-button.svelte';
	import AnimatedText from '$lib/components/utils/animated-text.svelte';
	import ProgressiveEnhancement from '$lib/components/utils/progressive-enhancement.svelte';
	import EffectCanvas from '$lib/components/base/effect-canvas.svelte';
	import { wavesEffect } from '$lib/effects/waveEffects';
	import LogoGithub from 'virtual:icons/pixelent/logo-github-32-filled';
	import LogoLinkedIn from 'virtual:icons/pixelent/logo-linkedin-32-filled';
	import IconError from 'virtual:icons/pixelent/error-circle-24-regular';
	import IconChevronRight from 'virtual:icons/pixelent/chevron-right-32-filled';
	import IconMenu from 'virtual:icons/pixelent/menu-24-regular';
	import background from '$lib/assets/img/bg-wavy.png';
	import me from '$lib/assets/me.json';

	const formatPostDate = format('PPP');

	const { data } = $props();

	let effectError: unknown = $state();
</script>

<div class="flex flex-col overflow-x-clip">
	<ProgressiveEnhancement>
		<LayoutSidebar>
			{#snippet activator({ onclick })}
				<AtomButton
					aria-label={$t('sidebar.labels.open')}
					variant="text"
					shadow="8px"
					class="fixed left-2 top-2 p-2 z-10"
					{onclick}
				>
					<IconMenu />
				</AtomButton>
			{/snippet}
		</LayoutSidebar>
	</ProgressiveEnhancement>

	<header class="w-screen min-h-screen h-[546px] flex justify-center items-center">
		<h1 class="flex flex-col items-center">
			<span class="font-stylized text-2xl leading-none drop-shadow-4px">
				{$t('home.title.0')}
			</span>
			<span
				class="relative font-header leading-snug text-5xl text-secondary-400 text-center drop-shadow-8px"
			>
				<AnimatedText
					text={$t('home.title.1')}
					class="relative animate-wave"
					style={(i) => `animation-delay: -${i * 110}ms`}
				/>
				<wbr />
				<AnimatedText
					text={$t('home.title.2')}
					class="relative animate-wave"
					style={(i) => `animation-delay: -${(i + 6) * 110}ms`}
				/>
				<wbr />
				<AnimatedText
					text={$t('home.title.3')}
					class="relative animate-wave"
					style={(i) => `animation-delay: -${(i + 12) * 110}ms`}
				/>
			</span>
			<span class="mt-4 font-stylized text-2xl leading-none text-primary-200 drop-shadow-4px">
				{$t('home.title.4')}
			</span>
		</h1>
	</header>

	{#snippet card(id: string, content: Snippet, href: string, side: 'left' | 'right')}
		<div
			use:appearOnScroll={side === 'left'
				? { animation: 'opacity-1 translate-x-0', animationOut: 'opacity-0 -translate-x-full' }
				: { animation: 'opacity-1 translate-x-0', animationOut: 'opacity-0 translate-x-full' }}
			class="border border-carbon bg-acrylic/60 p-8 w-[304px] lg:w-[800px] flex flex-col gap-8 shadow-32px/A backdrop-blur-2xl ease-in-out transition duration-1000 translate-x-f"
		>
			<h2 class="font-header text-3xl text-primary-200 drop-shadow-4px">
				{$t(`home.${id}.header`)}
			</h2>
			{@render content()}
			<AtomButton class="self-stretch lg:self-end" color="primary" {href} shadow>
				{$t(`home.${id}.cta`)}
				{#snippet appendIcon()}
					<IconChevronRight />
				{/snippet}
			</AtomButton>
		</div>
	{/snippet}
	<section
		class="mt-[50vh] w-screen min-h-screen h-[546px] flex justify-center lg:justify-start lg:pl-[112px] items-center"
	>
		{#snippet about()}
			<main
				class="prose prose-gray text-fg prose-strong:text-primary-200 prose-em:text-secondary-400 max-w-none"
			>
				<p>
					{@html $t('home.about.text')}
				</p>
			</main>
		{/snippet}
		{@render card('about', about, '/about', 'left')}
	</section>
	<section
		class="mt-[50vh] w-screen min-h-[200vh] h-[1092px] lg:min-h-[100vh] flex justify-center lg:justify-end lg:pr-[112px] items-center"
	>
		{#snippet blog()}
			<ol class="lg:pb-2 flex flex-col lg:flex-row items-center gap-4 lg:overflow-x-scroll w-full">
				{#each data.blogPosts as post (post.slug)}
					<li>
						<a href={post.link} class="group focus:outline-0">
							<article
								class="w-[240px] h-[160px] bg-matte shadow-4px group-hover:shadow-8px group-focus:shadow-8px group-active:shadow-2px flex flex-col p-2 gap-2 transition"
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
		{/snippet}
		{@render card('blog', blog, '/blog', 'right')}
	</section>

	<footer
		class="mt-[50vh] w-screen min-h-screen h-[546px] p-16 flex flex-col justify-end items-center relative"
	>
		<AtomButton
			href="/donate"
			color="secondary"
			shadow="8px"
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			use={[
				[
					appearOnScroll,
					{ animation: 'animate-appear-down', animationOut: 'animate-disappear-down' }
				]
			]}
		>
			{$t('home.footer.donate')}
			{#snippet appendIcon()}
				<IconChevronRight />
			{/snippet}
		</AtomButton>
		<ul class="flex gap-4">
			<li
				class="transition ease-in-out duration-1000"
				use:appearOnScroll={{
					animation: 'delay-100 opacity-1 translate-y-0',
					animationOut: 'opacity-0 translate-y-full'
				}}
			>
				<AtomButton
					variant="text"
					shadow="8px"
					aria-label={$t('home.footer.socials.linkedin')}
					href={me.links.linkedin}
				>
					<LogoLinkedIn />
				</AtomButton>
			</li>
			<li
				class="transition ease-in-out duration-1000"
				use:appearOnScroll={{
					animation: 'delay-200 opacity-1 translate-y-0',
					animationOut: 'opacity-0 translate-y-full'
				}}
			>
				<AtomButton
					variant="text"
					shadow="8px"
					aria-label={$t('home.footer.socials.github')}
					href={me.links.github}
				>
					<LogoGithub />
				</AtomButton>
			</li>
		</ul>
		<span
			class="mt-8 font-stylized drop-shadow-4px transition ease-in-out duration-1000"
			use:appearOnScroll={{
				animation: 'delay-300 opacity-1 translate-y-0',
				animationOut: 'opacity-0 translate-y-full'
			}}
		>
			{$t('home.footer.author')}
		</span>
		<span
			class="mt-1 font-stylized text-xs drop-shadow-4px transition ease-in-out duration-1000"
			use:appearOnScroll={{
				animation: 'delay-[400ms] opacity-1 translate-y-0',
				animationOut: 'opacity-0 translate-y-full'
			}}
		>
			{$t('home.footer.frameworks')}
		</span>
	</footer>
</div>

{#if effectError != null}
	<DialogRenderError error={effectError}>
		{#snippet activator({ onclick })}
			<AtomButton class="fixed top-2 right-2 z-10" color="danger" shadow="8px" {onclick}>
				<IconError />
			</AtomButton>
		{/snippet}
	</DialogRenderError>
{/if}
<EffectCanvas
	class="fixed top-0 left-0 w-screen h-screen -z-10"
	bind:error={effectError}
	renderEffect={wavesEffect}
>
	{#snippet fallback()}
		<img alt="Site background" src={background} class="w-full h-full" />
	{/snippet}
</EffectCanvas>
