<script lang="ts">
	import AtomButton from '$lib/components/atoms/atom-button.svelte';
	import { t } from '$lib/i18n';
	import LogoGithub from 'virtual:icons/pixelent/logo-github-32-filled';
	import LogoLinkedIn from 'virtual:icons/pixelent/logo-linkedin-32-filled';
	import me from '$lib/assets/me.json';
</script>

<footer
	class="footer border-t border-secondary-400 p-16 bg-secondary-500 flex flex-col gap-2 items-center text-secondary-fg"
>
	<ul class="flex gap-4">
		<li>
			<AtomButton
				variant="text"
				color="inverted"
				shadow
				shadowTint="secondary"
				aria-label={$t('footer.socials.linkedin')}
				href={me.links.linkedin}
			>
				<LogoLinkedIn />
			</AtomButton>
		</li>
		<li>
			<AtomButton
				variant="text"
				color="inverted"
				shadow
				shadowTint="secondary"
				aria-label={$t('footer.socials.github')}
				href={me.links.github}
			>
				<LogoGithub />
			</AtomButton>
		</li>
	</ul>
	<span class="font-stylized">
		{$t('footer.author')}
	</span>
	<span class="font-stylized text-xs">
		{$t('footer.frameworks')}
	</span>
</footer>
