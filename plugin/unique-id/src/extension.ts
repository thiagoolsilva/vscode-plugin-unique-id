// The module 'vscode' contains the VS Code extensibility API
import * as vscode from "vscode";
import { ResetSequenceCommandDispFact } from "./command/commands/resetSequence/resetSequenceCommandDispFact";
import { CurrentTimeInMillisecondsCommandDispFact } from "./command/commands/timeInMilliseconds/currentTimeInMillisecondsCommandDispFact";
import { CurrentTimeInMillisecondWithSeqCommandDispFact } from "./command/commands/timeInMillisecondsSeq/currentTimeInMillisecondWithSeqCommandDispFact";
import { UuidCommandDispFact } from "./command/commands/uuid/uuidCommandDispFact";

// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    ResetSequenceCommandDispFact.create(context),
    CurrentTimeInMillisecondsCommandDispFact.create(),
    CurrentTimeInMillisecondWithSeqCommandDispFact.create(context),
    UuidCommandDispFact.create()
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
