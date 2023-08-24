import { ICommand } from "../../contract/ICommand";
import * as vscode from "vscode";
import { ICurrentTimeSeqProcessor } from "./processor/ICurrentTimeSeqProcessor";

export class CurrentTimeInMillisecondWithSeqCommand implements ICommand {
  public constructor(
    private readonly editor: vscode.TextEditor | undefined,
    private readonly processor: ICurrentTimeSeqProcessor
  ) {}

  execute(): void {
    if (this.editor) {
      const location = this.editor.selection.active;
      const uniqueIdWithSequence =
        this.processor.currentTimeInMillisecondsSeq();

      this.editor.edit((editBuilder) => {
        editBuilder.insert(location, uniqueIdWithSequence);
      });
    } else {
      this.processor.showMessageError();
    }
  }
}
