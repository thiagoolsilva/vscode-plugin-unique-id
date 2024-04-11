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

import { Constants } from "../../../../utils/constants";
import { IConfigSequenceProcessor } from "./IConfigSequenceProcessor";
import * as vscode from "vscode";

export class ConfigSequenceProcessor implements IConfigSequenceProcessor {
  public constructor(
    private readonly  context: vscode.ExtensionContext
  ) {}
  
  public configSequence(sequence:number): boolean {
    let wasSaved = false;
    const localStorage = this.context.workspaceState;
    const sequenceKey = Constants.SEQUENCE_KEY;

    // update sequence into local storage
    if(sequence !== null && typeof sequence === "number") {
      localStorage.update(sequenceKey, sequence);
      wasSaved = localStorage.get(sequenceKey, 0) === sequence;
    }

    return wasSaved;
    
  }

 

  public showMessageError(): void {
    vscode.window.showErrorMessage("Invalid input data.");
  }  
};