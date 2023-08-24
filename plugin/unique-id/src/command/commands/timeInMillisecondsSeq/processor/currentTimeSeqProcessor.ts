import { Constants } from "../../../../utils/constants";
import { ICurrentTimeSeqProcessor } from "./ICurrentTimeSeqProcessor";
import * as vscode from "vscode";


export class CurrentTimeSeqProcessor implements ICurrentTimeSeqProcessor {

  public constructor(
    private readonly  context: vscode.ExtensionContext
  ) {}

  public currentTimeInMillisecondsSeq(): string {
    const currentDate = new Date();
    const currentTimeInMilliseconds = currentDate.getTime().toString();

    const localStorage = this.context.workspaceState;
    const sequenceKey = Constants.SEQUENCE_KEY;
    let currentSequence = localStorage.get(sequenceKey, 0);
    currentSequence++;

    // update sequence into local storage
    localStorage.update(sequenceKey, currentSequence);

    return `${currentTimeInMilliseconds}-${currentSequence}`;
  }

  public showMessageError(): void {
    vscode.window.showErrorMessage("None of the text editors is active.");
  }
}
