/**
 * Copyright © 2023 Thiago Lopes da Silva Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// The module 'vscode' contains the VS Code extensibility API
import * as vscode from "vscode";
import { ResetSequenceCommandDispFact } from "./command/commands/resetSequence/resetSequenceCommandDispFact";
import { CurrentTimeInMillisecondsCommandDispFact } from "./command/commands/timeInMilliseconds/currentTimeInMillisecondsCommandDispFact";
import { CurrentTimeInMillisecondWithSeqCommandDispFact } from "./command/commands/timeInMillisecondsSeq/currentTimeInMillisecondWithSeqCommandDispFact";
import { UuidCommandDispFact } from "./command/commands/uuid/uuidCommandDispFact";
import { NanoIdDispFact } from "./command/commands/nanoId/nanoIdDispFact";

// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    ResetSequenceCommandDispFact.create(context),
    CurrentTimeInMillisecondsCommandDispFact.create(),
    CurrentTimeInMillisecondWithSeqCommandDispFact.create(context),
    UuidCommandDispFact.create(),
    NanoIdDispFact.create()
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
