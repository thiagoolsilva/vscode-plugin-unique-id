import { Disposable } from "vscode";
import * as vscode from "vscode";
import { CommandInvoker } from "../../CommandInvoker";
import { ResetSequenceCommand } from "./resetSequenceCommand";
import { ResetSequenceProcessor } from "./processor/resetSequenceProcessor";


export class ResetSequenceCommandDispFact {
  
  public static create(context: vscode.ExtensionContext): Disposable {
    return vscode.commands.registerCommand("unique-id.resetSequence", () => {
      const command = new ResetSequenceCommand(
        new ResetSequenceProcessor(context)
      )
      const invoker = new CommandInvoker(command);
      invoker.init();
    });
  }

}