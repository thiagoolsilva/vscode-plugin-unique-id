import * as vscode from "vscode";
import { ICurrentTimeProcessor } from "./processor/ICurrentTimeProcessor";
import { ICommand } from "../../contract/ICommand";

export class CurrentTimeInMillisecondsCommand implements ICommand {
  public constructor(
    private readonly editor: vscode.TextEditor | undefined,
    private readonly processor: ICurrentTimeProcessor
  ) {}

  public execute(): void {
    if (this.editor) {
      const location = this.editor.selection.active;
      const currentTimeInMilliseconds =
        this.processor.currentTimeInMilliseconds();

      this.editor.edit((editBuilder) => {
        editBuilder.insert(location, currentTimeInMilliseconds);
      });
    } else {
      this.processor.showMessageError();
    }
  }
}
