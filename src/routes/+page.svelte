<script lang="ts">
	import me from '$lib/assets/me.json';
	import background from '$lib/assets/img/bg-wavy.png';
	import AtomButton from '$lib/components/atoms/atom-button.svelte';
	import AnimatedText from '$lib/components/atoms/animated-text.svelte';
	import LogoGithub from 'virtual:icons/pixelent/logo-github-32-filled';
	import LogoLinkedIn from 'virtual:icons/pixelent/logo-linkedin-32-filled';
	import IconChevronRight from 'virtual:icons/pixelent/chevron-right-32-filled';
	import type { Snippet } from 'svelte';
	import { format } from 'date-fns/fp';
	import { wavesEffect } from '$lib/effects/waveEffects';
	import EffectCanvas from '$lib/components/atoms/effect-canvas.svelte';

	const formatPostDate = format('PPP');

	const { data } = $props();
</script>

<EffectCanvas class="fixed top-0 left-0 w-screen h-screen -z-10" renderEffect={wavesEffect}>
	{#snippet fallback()}
		<img alt="Site background" src={background} class="w-full h-full" />
	{/snippet}
</EffectCanvas>
<header class="w-screen min-h-screen h-[546px] flex justify-center items-center">
	<h1 class="flex flex-col items-center">
		<span class="font-stylized text-2xl leading-none drop-shadow-4px">Welcome to</span>
		<span
			class="relative font-header leading-snug text-5xl text-secondary-400 text-center drop-shadow-8px"
		>
			<AnimatedText
				text="Fluffy"
				class="relative animate-wave"
				style={(i) => `animation-delay: -${i * 110}ms`}
			/>
			<wbr />
			<AnimatedText
				text="Bucket"
				class="relative animate-wave"
				style={(i) => `animation-delay: -${(i + 6) * 110}ms`}
			/>
			<wbr />
			<AnimatedText
				text="Snake's"
				class="relative animate-wave"
				style={(i) => `animation-delay: -${(i + 12) * 110}ms`}
			/>
		</span>
		<span class="mt-4 font-stylized text-2xl leading-none text-primary-200 drop-shadow-4px">
			Hacking Shack
		</span>
	</h1>
</header>

{#snippet card(title: string, content: Snippet, cta: [string, string])}
	<div
		class="border border-carbon bg-acrylic/60 p-8 w-[304px] lg:w-[800px] flex flex-col gap-8 shadow-32px/A backdrop-blur-2xl"
	>
		<h2 class="font-header text-3xl text-primary-200 drop-shadow-4px">{title}</h2>
		{@render content()}
		<AtomButton class="self-stretch lg:self-end" href={cta[0]} shadow>
			{cta[1]}
			{#snippet appendIcon()}
				<IconChevronRight />
			{/snippet}
		</AtomButton>
	</div>
{/snippet}
<section
	class="w-screen min-h-screen h-[546px] flex justify-center lg:justify-start lg:pl-[112px] items-center"
>
	{#snippet about()}
		<main
			class="prose prose-gray text-fg prose-strong:text-primary-200 prose-em:text-secondary-400 max-w-none"
		>
			<p>
				I am <strong>Bruno Henrique Glowaski Morais</strong>, AKA
				<strong>FluffyBucketSnake</strong>, a passionate <em>software developer</em>. I specialize
				in <em>computer graphics</em>,
				<em>operating systems</em>, <em>security</em> & <em>software engineering</em>, but, get
				this, I can quickly learn new technologies. My favorite languages are Rust, C# & TypeScript,
				but I also know a lot about C++, C, Python & Lua, and a bit of Java. I love game
				development, low-level programming & UI/UX design.
			</p>
		</main>
	{/snippet}
	{@render card('Who am I', about, ['/about', 'Want to learn more? Click here!'])}
</section>
<section
	class="w-screen min-h-[200vh] h-[1092px] lg:min-h-[100vh] flex justify-center lg:justify-end lg:pr-[112px] items-center"
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
	{@render card('What have I been posting', blog, ['/blog', 'Click here to see more!'])}
</section>

<footer
	class="w-screen min-h-screen h-[546px] p-16 flex flex-col justify-end items-center relative"
>
	<AtomButton
		href="/donate"
		color="secondary"
		shadow="8px"
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
	>
		Wanna buy me a coffe? Click here!
		{#snippet appendIcon()}
			<IconChevronRight />
		{/snippet}
	</AtomButton>
	<ul class="flex gap-4">
		<li>
			<AtomButton variant="text" shadow="8px" href={me.links.linkedin}><LogoLinkedIn /></AtomButton>
		</li>
		<li>
			<AtomButton variant="text" shadow="8px" href={me.links.github}><LogoGithub /></AtomButton>
		</li>
	</ul>
	<span class="mt-8 font-stylized drop-shadow-4px">Developed by me :)</span>
	<span class="mt-1 font-stylized text-xs drop-shadow-4px">Powered by SvelteKit & Tailwind CSS</span
	>
</footer>
