/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => HelloWorldPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  mySetting: "default"
};
var HelloWorldPlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.addRibbonIcon("dice", "Greet", () => {
      new import_obsidian.Notice("Hello World");
    });
    const ribbonIconEl = this.addRibbonIcon("dice", "Sample Plugin", (evt) => {
      new import_obsidian.Notice("This is a notice!");
    });
    ribbonIconEl.addClass("my-plugin-ribbon-class");
    const statusBarItemEl = this.addStatusBarItem();
    statusBarItemEl.setText("Status Bar Text");
    this.addCommand({
      id: "open-sample-modal-simple",
      name: "Open sample modal (simple)",
      callback: () => {
        new SampleModal(this.app).open();
      }
    });
    this.addCommand({
      id: "sample-editor-command",
      name: "Sample editor command",
      editorCallback: (editor, view) => {
        console.log(editor.getSelection());
        editor.replaceSelection("Sample Editor Command");
      }
    });
    this.addCommand({
      id: "open-sample-modal-complex",
      name: "Open sample modal (complex)",
      checkCallback: (checking) => {
        const markdownView = this.app.workspace.getActiveViewOfType(import_obsidian.MarkdownView);
        if (markdownView) {
          if (!checking) {
            new SampleModal(this.app).open();
          }
          return true;
        }
      }
    });
    this.addSettingTab(new SampleSettingTab(this.app, this));
    this.registerDomEvent(document, "click", (evt) => {
      console.log("click", evt);
    });
    this.registerInterval(window.setInterval(() => console.log("setInterval"), 5 * 60 * 1e3));
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};
var SampleModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.setText("Woah!");
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var SampleSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian.Setting(containerEl).setName("Setting #1").setDesc("It's a secret").addText((text) => text.setPlaceholder("Enter your secret").setValue(this.plugin.settings.mySetting).onChange(async (value) => {
      this.plugin.settings.mySetting = value;
      await this.plugin.saveSettings();
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xyXG5cclxuLy8gUmVtZW1iZXIgdG8gcmVuYW1lIHRoZXNlIGNsYXNzZXMgYW5kIGludGVyZmFjZXMhXHJcblxyXG5pbnRlcmZhY2UgTXlQbHVnaW5TZXR0aW5ncyB7XHJcblx0bXlTZXR0aW5nOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IE15UGx1Z2luU2V0dGluZ3MgPSB7XHJcblx0bXlTZXR0aW5nOiAnZGVmYXVsdCdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG9Xb3JsZFBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XHJcblx0c2V0dGluZ3M6IE15UGx1Z2luU2V0dGluZ3M7XHJcblxyXG5cdGFzeW5jIG9ubG9hZCgpIHtcclxuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XHJcblxyXG5cdFx0dGhpcy5hZGRSaWJib25JY29uKCdkaWNlJywgJ0dyZWV0JywgKCkgPT4ge1xyXG5cdFx0XHRuZXcgTm90aWNlKCdIZWxsbyBXb3JsZCcpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gVGhpcyBjcmVhdGVzIGFuIGljb24gaW4gdGhlIGxlZnQgcmliYm9uLlxyXG5cdFx0Y29uc3QgcmliYm9uSWNvbkVsID0gdGhpcy5hZGRSaWJib25JY29uKCdkaWNlJywgJ1NhbXBsZSBQbHVnaW4nLCAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XHJcblx0XHRcdC8vIENhbGxlZCB3aGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgaWNvbi5cclxuXHRcdFx0bmV3IE5vdGljZSgnVGhpcyBpcyBhIG5vdGljZSEnKTtcclxuXHRcdH0pO1xyXG5cdFx0Ly8gUGVyZm9ybSBhZGRpdGlvbmFsIHRoaW5ncyB3aXRoIHRoZSByaWJib25cclxuXHRcdHJpYmJvbkljb25FbC5hZGRDbGFzcygnbXktcGx1Z2luLXJpYmJvbi1jbGFzcycpO1xyXG5cclxuXHRcdC8vIFRoaXMgYWRkcyBhIHN0YXR1cyBiYXIgaXRlbSB0byB0aGUgYm90dG9tIG9mIHRoZSBhcHAuIERvZXMgbm90IHdvcmsgb24gbW9iaWxlIGFwcHMuXHJcblx0XHRjb25zdCBzdGF0dXNCYXJJdGVtRWwgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKTtcclxuXHRcdHN0YXR1c0Jhckl0ZW1FbC5zZXRUZXh0KCdTdGF0dXMgQmFyIFRleHQnKTtcclxuXHJcblx0XHQvLyBUaGlzIGFkZHMgYSBzaW1wbGUgY29tbWFuZCB0aGF0IGNhbiBiZSB0cmlnZ2VyZWQgYW55d2hlcmVcclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiAnb3Blbi1zYW1wbGUtbW9kYWwtc2ltcGxlJyxcclxuXHRcdFx0bmFtZTogJ09wZW4gc2FtcGxlIG1vZGFsIChzaW1wbGUpJyxcclxuXHRcdFx0Y2FsbGJhY2s6ICgpID0+IHtcclxuXHRcdFx0XHRuZXcgU2FtcGxlTW9kYWwodGhpcy5hcHApLm9wZW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHQvLyBUaGlzIGFkZHMgYW4gZWRpdG9yIGNvbW1hbmQgdGhhdCBjYW4gcGVyZm9ybSBzb21lIG9wZXJhdGlvbiBvbiB0aGUgY3VycmVudCBlZGl0b3IgaW5zdGFuY2VcclxuXHRcdHRoaXMuYWRkQ29tbWFuZCh7XHJcblx0XHRcdGlkOiAnc2FtcGxlLWVkaXRvci1jb21tYW5kJyxcclxuXHRcdFx0bmFtZTogJ1NhbXBsZSBlZGl0b3IgY29tbWFuZCcsXHJcblx0XHRcdGVkaXRvckNhbGxiYWNrOiAoZWRpdG9yOiBFZGl0b3IsIHZpZXc6IE1hcmtkb3duVmlldykgPT4ge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGVkaXRvci5nZXRTZWxlY3Rpb24oKSk7XHJcblx0XHRcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oJ1NhbXBsZSBFZGl0b3IgQ29tbWFuZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdC8vIFRoaXMgYWRkcyBhIGNvbXBsZXggY29tbWFuZCB0aGF0IGNhbiBjaGVjayB3aGV0aGVyIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBhcHAgYWxsb3dzIGV4ZWN1dGlvbiBvZiB0aGUgY29tbWFuZFxyXG5cdFx0dGhpcy5hZGRDb21tYW5kKHtcclxuXHRcdFx0aWQ6ICdvcGVuLXNhbXBsZS1tb2RhbC1jb21wbGV4JyxcclxuXHRcdFx0bmFtZTogJ09wZW4gc2FtcGxlIG1vZGFsIChjb21wbGV4KScsXHJcblx0XHRcdGNoZWNrQ2FsbGJhY2s6IChjaGVja2luZzogYm9vbGVhbikgPT4ge1xyXG5cdFx0XHRcdC8vIENvbmRpdGlvbnMgdG8gY2hlY2tcclxuXHRcdFx0XHRjb25zdCBtYXJrZG93blZpZXcgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0QWN0aXZlVmlld09mVHlwZShNYXJrZG93blZpZXcpO1xyXG5cdFx0XHRcdGlmIChtYXJrZG93blZpZXcpIHtcclxuXHRcdFx0XHRcdC8vIElmIGNoZWNraW5nIGlzIHRydWUsIHdlJ3JlIHNpbXBseSBcImNoZWNraW5nXCIgaWYgdGhlIGNvbW1hbmQgY2FuIGJlIHJ1bi5cclxuXHRcdFx0XHRcdC8vIElmIGNoZWNraW5nIGlzIGZhbHNlLCB0aGVuIHdlIHdhbnQgdG8gYWN0dWFsbHkgcGVyZm9ybSB0aGUgb3BlcmF0aW9uLlxyXG5cdFx0XHRcdFx0aWYgKCFjaGVja2luZykge1xyXG5cdFx0XHRcdFx0XHRuZXcgU2FtcGxlTW9kYWwodGhpcy5hcHApLm9wZW4oKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBUaGlzIGNvbW1hbmQgd2lsbCBvbmx5IHNob3cgdXAgaW4gQ29tbWFuZCBQYWxldHRlIHdoZW4gdGhlIGNoZWNrIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvLyBUaGlzIGFkZHMgYSBzZXR0aW5ncyB0YWIgc28gdGhlIHVzZXIgY2FuIGNvbmZpZ3VyZSB2YXJpb3VzIGFzcGVjdHMgb2YgdGhlIHBsdWdpblxyXG5cdFx0dGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBTYW1wbGVTZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XHJcblxyXG5cdFx0Ly8gSWYgdGhlIHBsdWdpbiBob29rcyB1cCBhbnkgZ2xvYmFsIERPTSBldmVudHMgKG9uIHBhcnRzIG9mIHRoZSBhcHAgdGhhdCBkb2Vzbid0IGJlbG9uZyB0byB0aGlzIHBsdWdpbilcclxuXHRcdC8vIFVzaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXIgd2hlbiB0aGlzIHBsdWdpbiBpcyBkaXNhYmxlZC5cclxuXHRcdHRoaXMucmVnaXN0ZXJEb21FdmVudChkb2N1bWVudCwgJ2NsaWNrJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnY2xpY2snLCBldnQpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gV2hlbiByZWdpc3RlcmluZyBpbnRlcnZhbHMsIHRoaXMgZnVuY3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IGNsZWFyIHRoZSBpbnRlcnZhbCB3aGVuIHRoZSBwbHVnaW4gaXMgZGlzYWJsZWQuXHJcblx0XHR0aGlzLnJlZ2lzdGVySW50ZXJ2YWwod2luZG93LnNldEludGVydmFsKCgpID0+IGNvbnNvbGUubG9nKCdzZXRJbnRlcnZhbCcpLCA1ICogNjAgKiAxMDAwKSk7XHJcblx0fVxyXG5cclxuXHRvbnVubG9hZCgpIHtcclxuXHJcblx0fVxyXG5cclxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XHJcblx0XHR0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcclxuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBTYW1wbGVNb2RhbCBleHRlbmRzIE1vZGFsIHtcclxuXHRjb25zdHJ1Y3RvcihhcHA6IEFwcCkge1xyXG5cdFx0c3VwZXIoYXBwKTtcclxuXHR9XHJcblxyXG5cdG9uT3BlbigpIHtcclxuXHRcdGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcclxuXHRcdGNvbnRlbnRFbC5zZXRUZXh0KCdXb2FoIScpO1xyXG5cdH1cclxuXHJcblx0b25DbG9zZSgpIHtcclxuXHRcdGNvbnN0IHtjb250ZW50RWx9ID0gdGhpcztcclxuXHRcdGNvbnRlbnRFbC5lbXB0eSgpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgU2FtcGxlU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xyXG5cdHBsdWdpbjogSGVsbG9Xb3JsZFBsdWdpbjtcclxuXHJcblx0Y29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogSGVsbG9Xb3JsZFBsdWdpbikge1xyXG5cdFx0c3VwZXIoYXBwLCBwbHVnaW4pO1xyXG5cdFx0dGhpcy5wbHVnaW4gPSBwbHVnaW47XHJcblx0fVxyXG5cclxuXHRkaXNwbGF5KCk6IHZvaWQge1xyXG5cdFx0Y29uc3Qge2NvbnRhaW5lckVsfSA9IHRoaXM7XHJcblxyXG5cdFx0Y29udGFpbmVyRWwuZW1wdHkoKTtcclxuXHJcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcclxuXHRcdFx0LnNldE5hbWUoJ1NldHRpbmcgIzEnKVxyXG5cdFx0XHQuc2V0RGVzYygnSXRcXCdzIGEgc2VjcmV0JylcclxuXHRcdFx0LmFkZFRleHQodGV4dCA9PiB0ZXh0XHJcblx0XHRcdFx0LnNldFBsYWNlaG9sZGVyKCdFbnRlciB5b3VyIHNlY3JldCcpXHJcblx0XHRcdFx0LnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm15U2V0dGluZylcclxuXHRcdFx0XHQub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnBsdWdpbi5zZXR0aW5ncy5teVNldHRpbmcgPSB2YWx1ZTtcclxuXHRcdFx0XHRcdGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xyXG5cdFx0XHRcdH0pKTtcclxuXHR9XHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE0RjtBQVE1RixJQUFNLG1CQUFxQztBQUFBLEVBQzFDLFdBQVc7QUFDWjtBQUVBLElBQXFCLG1CQUFyQixjQUE4Qyx1QkFBTztBQUFBLEVBR3BELE1BQU0sU0FBUztBQUNkLFVBQU0sS0FBSyxhQUFhO0FBRXhCLFNBQUssY0FBYyxRQUFRLFNBQVMsTUFBTTtBQUN6QyxVQUFJLHVCQUFPLGFBQWE7QUFBQSxJQUN6QixDQUFDO0FBR0QsVUFBTSxlQUFlLEtBQUssY0FBYyxRQUFRLGlCQUFpQixDQUFDLFFBQW9CO0FBRXJGLFVBQUksdUJBQU8sbUJBQW1CO0FBQUEsSUFDL0IsQ0FBQztBQUVELGlCQUFhLFNBQVMsd0JBQXdCO0FBRzlDLFVBQU0sa0JBQWtCLEtBQUssaUJBQWlCO0FBQzlDLG9CQUFnQixRQUFRLGlCQUFpQjtBQUd6QyxTQUFLLFdBQVc7QUFBQSxNQUNmLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVUsTUFBTTtBQUNmLFlBQUksWUFBWSxLQUFLLEdBQUcsRUFBRSxLQUFLO0FBQUEsTUFDaEM7QUFBQSxJQUNELENBQUM7QUFFRCxTQUFLLFdBQVc7QUFBQSxNQUNmLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLGdCQUFnQixDQUFDLFFBQWdCLFNBQXVCO0FBQ3ZELGdCQUFRLElBQUksT0FBTyxhQUFhLENBQUM7QUFDakMsZUFBTyxpQkFBaUIsdUJBQXVCO0FBQUEsTUFDaEQ7QUFBQSxJQUNELENBQUM7QUFFRCxTQUFLLFdBQVc7QUFBQSxNQUNmLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLGVBQWUsQ0FBQyxhQUFzQjtBQUVyQyxjQUFNLGVBQWUsS0FBSyxJQUFJLFVBQVUsb0JBQW9CLDRCQUFZO0FBQ3hFLFlBQUksY0FBYztBQUdqQixjQUFJLENBQUMsVUFBVTtBQUNkLGdCQUFJLFlBQVksS0FBSyxHQUFHLEVBQUUsS0FBSztBQUFBLFVBQ2hDO0FBR0EsaUJBQU87QUFBQSxRQUNSO0FBQUEsTUFDRDtBQUFBLElBQ0QsQ0FBQztBQUdELFNBQUssY0FBYyxJQUFJLGlCQUFpQixLQUFLLEtBQUssSUFBSSxDQUFDO0FBSXZELFNBQUssaUJBQWlCLFVBQVUsU0FBUyxDQUFDLFFBQW9CO0FBQzdELGNBQVEsSUFBSSxTQUFTLEdBQUc7QUFBQSxJQUN6QixDQUFDO0FBR0QsU0FBSyxpQkFBaUIsT0FBTyxZQUFZLE1BQU0sUUFBUSxJQUFJLGFBQWEsR0FBRyxJQUFJLEtBQUssR0FBSSxDQUFDO0FBQUEsRUFDMUY7QUFBQSxFQUVBLFdBQVc7QUFBQSxFQUVYO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDcEIsU0FBSyxXQUFXLE9BQU8sT0FBTyxDQUFDLEdBQUcsa0JBQWtCLE1BQU0sS0FBSyxTQUFTLENBQUM7QUFBQSxFQUMxRTtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ3BCLFVBQU0sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUFBLEVBQ2xDO0FBQ0Q7QUFFQSxJQUFNLGNBQU4sY0FBMEIsc0JBQU07QUFBQSxFQUMvQixZQUFZLEtBQVU7QUFDckIsVUFBTSxHQUFHO0FBQUEsRUFDVjtBQUFBLEVBRUEsU0FBUztBQUNSLFVBQU0sRUFBQyxVQUFTLElBQUk7QUFDcEIsY0FBVSxRQUFRLE9BQU87QUFBQSxFQUMxQjtBQUFBLEVBRUEsVUFBVTtBQUNULFVBQU0sRUFBQyxVQUFTLElBQUk7QUFDcEIsY0FBVSxNQUFNO0FBQUEsRUFDakI7QUFDRDtBQUVBLElBQU0sbUJBQU4sY0FBK0IsaUNBQWlCO0FBQUEsRUFHL0MsWUFBWSxLQUFVLFFBQTBCO0FBQy9DLFVBQU0sS0FBSyxNQUFNO0FBQ2pCLFNBQUssU0FBUztBQUFBLEVBQ2Y7QUFBQSxFQUVBLFVBQWdCO0FBQ2YsVUFBTSxFQUFDLFlBQVcsSUFBSTtBQUV0QixnQkFBWSxNQUFNO0FBRWxCLFFBQUksd0JBQVEsV0FBVyxFQUNyQixRQUFRLFlBQVksRUFDcEIsUUFBUSxlQUFnQixFQUN4QixRQUFRLFVBQVEsS0FDZixlQUFlLG1CQUFtQixFQUNsQyxTQUFTLEtBQUssT0FBTyxTQUFTLFNBQVMsRUFDdkMsU0FBUyxPQUFPLFVBQVU7QUFDMUIsV0FBSyxPQUFPLFNBQVMsWUFBWTtBQUNqQyxZQUFNLEtBQUssT0FBTyxhQUFhO0FBQUEsSUFDaEMsQ0FBQyxDQUFDO0FBQUEsRUFDTDtBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=
