import { Disposable } from "vscode";
import * as vscode from "vscode";
import { CommandInvoker } from "../../CommandInvoker";
import { CurrentTimeInMillisecondWithSeqCommand } from "./currentTimeInMillisecondWithSeqCommand";
import { CurrentTimeSeqProcessor } from "./processor/currentTimeSeqProcessor";


export class CurrentTimeInMillisecondWithSeqCommandDispFact {
  
  public static create(context: vscode.ExtensionContext): Disposable {
    return vscode.commands.registerCommand(
      "unique-id.currentTimeInMillisecondsWithSequence",
      () => {
        const command = new CurrentTimeInMillisecondWithSeqCommand(
          vscode.window.activeTextEditor,
          new CurrentTimeSeqProcessor(context));
  
        const invoker = new CommandInvoker(command);
        invoker.init();
      }
    );
  }
  
}