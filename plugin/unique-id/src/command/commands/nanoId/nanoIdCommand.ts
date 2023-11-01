import { ICommand } from "../../contract/ICommand";
import { INanoIdProcessor } from "./processor/INanoIdProcessor";
import * as vscode from "vscode";

export class NanoIdCommand implements ICommand {
  public constructor(
    private readonly editor: vscode.TextEditor | undefined,
    private readonly processor: INanoIdProcessor
  ) {}

  public execute(): void {
    if (this.editor) {
      const uuid = this.processor.createNanoId();
      const location = this.editor.selection.active;
      this.editor.edit((editBuilder) => {
        editBuilder.insert(location, uuid);
      });
    } else {
      this.processor.showErrorMessage();
    }  }
}