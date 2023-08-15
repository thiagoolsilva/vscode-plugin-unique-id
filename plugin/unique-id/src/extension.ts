// The module 'vscode' contains the VS Code extensibility API
import * as vscode from "vscode";
import { v4 } from "uuid";

// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let uuidCommand = vscode.commands.registerCommand("unique-id.uuid", () => {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
      const uuid = v4();
      editor.edit((editBuilder) => {
        editBuilder.insert(editor.selection.active, uuid);
      });
    } else {
      vscode.window.showErrorMessage("None of the text editors is active..");
    }
  });

	let currentTimeInMillisecondsCommand = vscode.commands.registerCommand('unique-id.currentTimeInMilliseconds', () => {
		const editor = vscode.window.activeTextEditor;
    if (editor) {
      const currentDate = new Date();
			const currentTimeInMilliseconds = currentDate.getTime().toString();
      editor.edit((editBuilder) => {
        editBuilder.insert(editor.selection.active, currentTimeInMilliseconds);
      });
    } else {
      vscode.window.showErrorMessage("None of the text editors is active..");
    }
	});

  let currentTimeInMillisecondsWithSequence = vscode.commands.registerCommand('unique-id.currentTimeInMillisecondsWithSequence', () => {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
      const localStorage = context.workspaceState;
      const sequenceKey = 'uniqueIdSequence';
      const currentDate = new Date();
			const currentTimeInMilliseconds = currentDate.getTime().toString();

      let currentSequence = localStorage.get(sequenceKey, 0);
      currentSequence++;

      const uniqueIdWithSequence = `${currentTimeInMilliseconds}-${currentSequence}`;
      
      editor.edit((editBuilder) => {
        editBuilder.insert(editor.selection.active, uniqueIdWithSequence);
        localStorage.update(sequenceKey, currentSequence);
      });
    } else {
      vscode.window.showErrorMessage("None of the text editors is active..");
    }   
  });

  context.subscriptions.push(uuidCommand,
                             currentTimeInMillisecondsCommand,
                             currentTimeInMillisecondsWithSequence);
}

// This method is called when your extension is deactivated
export function deactivate() {}
