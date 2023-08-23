import { ICommand } from "../contract/ICommand";
import * as vscode from "vscode";

export class CurrentTimeInMillisecondsCommand implements ICommand {
  public execute(): void {
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
  }
}
