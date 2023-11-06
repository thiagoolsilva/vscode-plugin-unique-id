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