/**
 * Copyright © 2023-2024 Thiago Lopes da Silva Google LLC
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

import { ICommand } from "../../contract/ICommand";
import { IConfigSequenceProcessor } from "./processor/IConfigSequenceProcessor";
import * as vscode from "vscode";

export class ConfigSequenceCommand implements ICommand {
  public constructor(
    private readonly editor: vscode.TextEditor | undefined,
    private readonly processor: IConfigSequenceProcessor,
  ) {}

  public async execute(): Promise<void> {
    if (this.editor) {
      const userInput = await vscode.window.showInputBox({
        prompt: "Configure sequence number",
        value: "0",
      });

      if (userInput) {
        vscode.window.showInformationMessage(`user sequence number: ${userInput}`);
    } else {
        vscode.window.showInformationMessage('Invalid user input data.');
    }    
    } else {
      this.processor.showMessageError();
    }
  }
}
