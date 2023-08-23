import { ICommand } from "../../contract/ICommand";
import * as vscode from "vscode";
import { IUUIDProcessor } from "./processor/IUUDProcessor";

export class UUIDCommand implements ICommand {
  public constructor(
    private readonly editor: vscode.TextEditor | undefined,
    private readonly processor: IUUIDProcessor
  ) {}

  public execute(): void {
    if (this.editor) {
      const uuid = this.processor.createUUid();
      const location = this.editor.selection.active;
      this.editor.edit((editBuilder) => {
        editBuilder.insert(location, uuid);
      });
    } else {
      this.processor.showErrorMessage();
    }
  }
}
