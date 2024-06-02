<script lang="ts">
	import background from '$lib/assets/img/bg-wavy.png';
	import AtomButton from '$lib/atoms/atom-button.svelte';
	import type { Snippet } from 'svelte';
</script>

<figure class="fixed top-0 left-0 w-screen h-screen -z-10">
	<img alt="Site background" src={background} class="w-full h-full" />
</figure>
<header class="w-screen min-h-screen h-[546px] flex justify-center items-center">
	<h1 class="flex flex-col items-center">
		<span class="font-stylized text-2xl leading-none drop-shadow-4px">Welcome to</span>
		<span class="font-header text-5xl leading-none text-secondary-400 text-center drop-shadow-8px">
			Fluffy<wbr />Bucket<wbr />Snake's
		</span>
		<span class="mt-1 font-stylized text-2xl leading-none text-primary-200 drop-shadow-4px">
			Hacking Shack
		</span>
	</h1>
</header>

{#snippet card(title: string, content: Snippet, cta: [string, string])}
	<div
		class="border border-carbon bg-acrylic p-8 w-[304px] lg:w-[800px] flex flex-col gap-8 shadow-32px/A backdrop-blur-2xl"
	>
		<h2 class="font-header text-3xl text-primary-200 drop-shadow-4px">{title}</h2>
		{@render content()}
		<AtomButton class="self-end" href={cta[0]} shadow>{cta[1]}</AtomButton>
	</div>
{/snippet}
<section class="w-screen min-h-screen h-[546px] flex justify-center items-center">
	{#snippet about()}
		<main
			class="prose prose-gray text-fg prose-strong:text-primary-200 prose-em:text-secondary-400"
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
<section class="w-screen min-h-[200vh] h-[1092px] flex justify-center items-center">
	{#snippet post(title: string, link: string, date: string, description: string)}
		<li class="w-[240px] h-[160px] bg-matte shadow-2px flex flex-col p-2 gap-2">
			<a class="font-header text-lg leading-none" href={link}>{title}</a>
			<span class="text-xs text-fg/75 leading-none">{date}</span>
			<p class="text-sm">{description}</p>
		</li>
	{/snippet}
	{#snippet blog()}
		<ol class="flex flex-col gap-4">
			{@render post(
				'Hello Again',
				'/post/a',
				'September 11th, 2022',
				"I've been away for a while, so lets talk about a bunch of small fixes and improvements, and also some new features"
			)}
			{@render post(
				'Hello Again',
				'/post/a',
				'September 11th, 2022',
				"I've been away for a while, so lets talk about a bunch of small fixes and improvements, and also some new features"
			)}
			{@render post(
				'Hello Again',
				'/post/a',
				'September 11th, 2022',
				"I've been away for a while, so lets talk about a bunch of small fixes and improvements, and also some new features"
			)}
			{@render post(
				'Hello Again',
				'/post/a',
				'September 11th, 2022',
				"I've been away for a while, so lets talk about a bunch of small fixes and improvements, and also some new features"
			)}
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
	</AtomButton>
	<ul class="flex gap-4">
		<li><a href="linkedin">icon</a></li>
		<li><a href="github">icon</a></li>
	</ul>
	<span class="mt-8 font-stylized drop-shadow-4px">Developed by me :)</span>
	<span class="mt-1 font-stylized text-xs drop-shadow-4px">Powered by SvelteKit & Tailwind CSS</span
	>
</footer>
