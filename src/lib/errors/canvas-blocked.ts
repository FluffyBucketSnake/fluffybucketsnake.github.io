export class CanvasBlockedError extends Error {
	constructor() {
		super('Canvas and/or WebGL features are blocked by the browser');
		this.name = 'CanvasBlockedError';
	}
}
