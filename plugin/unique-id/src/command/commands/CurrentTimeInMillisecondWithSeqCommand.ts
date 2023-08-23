import { ICommand } from "../contract/ICommand";
import * as vscode from "vscode";

export class CurrentTimeInMillisecondWithSeqCommand implements ICommand {
  public constructor(private readonly context: vscode.ExtensionContext) {}

  execute(): void {
    const editor = vscode.window.activeTextEditor;

    if (editor) {
      const localStorage = this.context.workspaceState;
      const sequenceKey = "uniqueIdSequence";
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
  }
}
