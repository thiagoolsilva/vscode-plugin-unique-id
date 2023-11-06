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

import { Constants } from "../../../../utils/constants";
import { IResetSequenceProcessor } from "./IResetSequenceProcessor";
import * as vscode from "vscode";

export class ResetSequenceProcessor implements IResetSequenceProcessor {
  public constructor(private readonly context: vscode.ExtensionContext) {}

  public resetSequence(): void {
    const localStorage = this.context.workspaceState;
    const sequenceKey = Constants.SEQUENCE_KEY;

    localStorage.update(sequenceKey, 0);

    vscode.window.showWarningMessage("Sequence deleted");
  }
}
