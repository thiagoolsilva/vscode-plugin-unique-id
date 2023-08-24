import { Disposable } from "vscode";
import * as vscode from "vscode";
import { CommandInvoker } from "../../CommandInvoker";
import { CurrentTimeInMillisecondsCommand } from "./currentTimeInMillisecondsCommand";
import { CurrentTimeProcessor } from "./processor/currentTimeProcessor";


export class CurrentTimeInMillisecondsCommandDispFact {
  
  public static create(): Disposable {
    return vscode.commands.registerCommand(
      "unique-id.currentTimeInMilliseconds",
      () => {
        const command = new CurrentTimeInMillisecondsCommand(
          vscode.window.activeTextEditor,
          new CurrentTimeProcessor()
        );
        const invoker = new CommandInvoker(command);
        invoker.init();
      }
    );
  }
  
}