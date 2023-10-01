import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

// Remember to rename these classes and interfaces!

interface InstantNoteSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: InstantNoteSettings = {
	mySetting: 'default'
}

export default class InstantNotePlugin extends Plugin {
	settings: InstantNoteSettings;

	async onload() {
		await this.loadSettings();

		const ribbonIcon = this.addRibbonIcon('create-new', 'InstantNote', () => {
			new Notice('Hello World this is the InstantNote Plugin');
		});

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl = this.addStatusBarItem();
		statusBarItemEl.setText('Instant Note Plugin Enabled');

		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'open-sample-modal-simple',
			name: 'Open sample modal (simple)',
			callback: () => {
				new SampleModal(this.app).open();
			}
		});
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

