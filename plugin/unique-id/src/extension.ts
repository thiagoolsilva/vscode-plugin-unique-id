// The module 'vscode' contains the VS Code extensibility API
import * as vscode from "vscode";
import { CommandInvoker } from "./command/CommandInvoker";
import { UUIDCommand } from "./command/commands/uuid/UUIDCommand";
import { CurrentTimeInMillisecondsCommand } from "./command/commands/CurrentTimeInMillisecondsCommand";
import { CurrentTimeInMillisecondWithSeqCommand } from "./command/commands/CurrentTimeInMillisecondWithSeqCommand";
import { UUIDProcessor } from "./command/commands/uuid/processor/UUIDProcessor";

// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  let uuidCommand = vscode.commands.registerCommand("unique-id.uuid", () => {
    const command = new UUIDCommand(
      vscode.window.activeTextEditor,
      new UUIDProcessor()
    );
    const invoker = new CommandInvoker(command);
    invoker.init();
  });

  let currentTimeInMillisecondsCommand = vscode.commands.registerCommand(
    "unique-id.currentTimeInMilliseconds",
    () => {
      const invoker = new CommandInvoker(
        new CurrentTimeInMillisecondsCommand()
      );
      invoker.init();
    }
  );

  let currentTimeInMillisecondsWithSequence = vscode.commands.registerCommand(
    "unique-id.currentTimeInMillisecondsWithSequence",
    () => {
      const invoker = new CommandInvoker(
        new CurrentTimeInMillisecondWithSeqCommand(context)
      );
      invoker.init();
    }
  );

  context.subscriptions.push(
    uuidCommand,
    currentTimeInMillisecondsCommand,
    currentTimeInMillisecondsWithSequence
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
