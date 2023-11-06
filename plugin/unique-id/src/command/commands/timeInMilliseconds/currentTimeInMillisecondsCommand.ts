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

import * as vscode from "vscode";
import { ICurrentTimeProcessor } from "./processor/ICurrentTimeProcessor";
import { ICommand } from "../../contract/ICommand";

export class CurrentTimeInMillisecondsCommand implements ICommand {
  public constructor(
    private readonly editor: vscode.TextEditor | undefined,
    private readonly processor: ICurrentTimeProcessor
  ) {}

  public execute(): void {
    if (this.editor) {
      const location = this.editor.selection.active;
      const currentTimeInMilliseconds =
        this.processor.currentTimeInMilliseconds();

      this.editor.edit((editBuilder) => {
        editBuilder.insert(location, currentTimeInMilliseconds);
      });
    } else {
      this.processor.showMessageError();
    }
  }
}
