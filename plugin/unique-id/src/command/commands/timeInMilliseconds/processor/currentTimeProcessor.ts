import { ICurrentTimeProcessor } from "./ICurrentTimeProcessor";
import * as vscode from "vscode";

export class CurrentTimeProcessor implements ICurrentTimeProcessor {
  public currentTimeInMilliseconds(): string {
    const currentDate = new Date();
    return currentDate.getTime().toString();
  }
  
  public showMessageError(): void {
    vscode.window.showErrorMessage("None of the text editors is active.");
  }
}
