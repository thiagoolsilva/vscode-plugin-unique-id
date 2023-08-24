import { Disposable } from "vscode";
import * as vscode from "vscode";
import { CommandInvoker } from "../../CommandInvoker";
import { UUIDCommand } from "./uuidCommand";
import { UUIDProcessor } from "./processor/uuidProcessor";


export class UuidCommandDispFact {
  
  public static create(): Disposable {
    return vscode.commands.registerCommand("unique-id.uuid", () => {
      const command = new UUIDCommand(
        vscode.window.activeTextEditor,
        new UUIDProcessor()
      );
      const invoker = new CommandInvoker(command);
      invoker.init();
    });
  }
  
}