import { ICommand } from "./contract/ICommand";

export class CommandInvoker {
  public constructor(private readonly command: ICommand) {}

  public init(): void {
    this.command.execute();
  }
}
