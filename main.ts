import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import generate from "src/generate"

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

		this.addRibbonIcon('create-new', 'InstantNote', () => {
			new Notice('Hello World this is the InstantNote Plugin');
		});

		// This adds a status bar item to the bottom of the app. Does not work on mobile apps.
		const statusBarItemEl = this.addStatusBarItem();
		statusBarItemEl.setText('Instant Note Plugin Enabled');

		
		this.addCommand({
			id: 'text-to-page',
			name: 'Text to Page',
			editorCallback: async (editor: Editor, view: MarkdownView) => {
				console.log("Reached Text To Page Command");
				editor.setCursor(editor.lastLine());
				try {
					const response = await generate({
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({input: "default"}),
					});
					console.log("respose: " + response);

					editor.replaceSelection(response);
				}
				catch{
					console.log("An Error Occurred");
				}
			}
		});

		this.addCommand({
			id: 'sample-editor-command',
			name: 'Sample editor command',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				console.log(editor.getSelection());
				editor.replaceSelection('Sample Editor Command');
			}
		});


		this.addCommand({
			id: 'open',
			name: 'Open',
			callback: () => {
				console.log("reached");
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

