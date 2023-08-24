import { Constants } from "../../../../utils/constants";
import { IResetSequenceProcessor } from "./IResetSequenceProcessor";
import * as vscode from "vscode";

export class ResetSequenceProcessor implements IResetSequenceProcessor {
  public constructor(private readonly context: vscode.ExtensionContext) {}

  public resetSequence(): void {
    const localStorage = this.context.workspaceState;
    const sequenceKey = Constants.SEQUENCE_KEY;

    localStorage.update(sequenceKey, 0);

    vscode.window.showWarningMessage("Sequence deleted");
  }
}
