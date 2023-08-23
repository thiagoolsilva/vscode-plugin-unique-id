import { IUUIDProcessor } from "./IUUDProcessor";
import { v4 } from "uuid";
import * as vscode from "vscode";

export class UUIDProcessor implements IUUIDProcessor {
  public showErrorMessage(): void {
    vscode.window.showErrorMessage("None of the text editors is active.");
  }

  public createUUid(): string {
    return v4();
  }
}
