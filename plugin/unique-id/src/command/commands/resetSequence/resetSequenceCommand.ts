import { ICommand } from "../../contract/ICommand";
import { IResetSequenceProcessor } from "./processor/IResetSequenceProcessor";

export class ResetSequenceCommand implements ICommand {
  public constructor(private readonly processor: IResetSequenceProcessor) {}

  public execute(): void {
    this.processor.resetSequence();
  }
}
