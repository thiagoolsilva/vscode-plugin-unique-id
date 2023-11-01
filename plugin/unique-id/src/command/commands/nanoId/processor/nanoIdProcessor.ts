import { INanoIdProcessor } from "./INanoIdProcessor";
import { nanoid } from "nanoid";
import * as vscode from "vscode";

export class NanoIdProcessor implements INanoIdProcessor {
  public showErrorMessage(): void {
    vscode.window.showErrorMessage("None of the text editors is active.");
  }

  public createNanoId(): string {
    return nanoid();
  }
}