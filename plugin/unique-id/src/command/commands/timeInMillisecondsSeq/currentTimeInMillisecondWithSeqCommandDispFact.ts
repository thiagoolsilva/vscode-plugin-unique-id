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
          new CurrentTimeSeqProcessor(context)
        );

        const invoker = new CommandInvoker(command);
        invoker.init();
      }
    );
  }
}
