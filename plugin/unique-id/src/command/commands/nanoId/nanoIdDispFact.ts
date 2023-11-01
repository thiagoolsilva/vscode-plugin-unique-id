import { Disposable } from "vscode";
import * as vscode from "vscode";
import { CommandInvoker } from "../../CommandInvoker";
import { NanoIdCommand } from "./nanoIdCommand";
import { NanoIdProcessor } from "./processor/nanoIdProcessor";

export class NanoIdDispFact {
  
  public static create(): Disposable {
    return vscode.commands.registerCommand("unique-id.nanoId", () => {
      const command = new NanoIdCommand(
        vscode.window.activeTextEditor,
        new NanoIdProcessor()
      );
      const invoker = new CommandInvoker(command);
      invoker.init();
    });
  }  
}