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
import { ICurrentTimeSeqProcessor } from "./ICurrentTimeSeqProcessor";
import * as vscode from "vscode";


export class CurrentTimeSeqProcessor implements ICurrentTimeSeqProcessor {

  public constructor(
    private readonly  context: vscode.ExtensionContext
  ) {}

  public currentTimeInMillisecondsSeq(): string {
    const currentDate = new Date();
    const currentTimeInMilliseconds = currentDate.getTime().toString();

    const localStorage = this.context.workspaceState;
    const sequenceKey = Constants.SEQUENCE_KEY;
    let currentSequence = localStorage.get(sequenceKey, 0);
    currentSequence++;

    // update sequence into local storage
    localStorage.update(sequenceKey, currentSequence);

    return `${currentTimeInMilliseconds}-${currentSequence}`;
  }

  public showMessageError(): void {
    vscode.window.showErrorMessage("None of the text editors is active.");
  }
}
