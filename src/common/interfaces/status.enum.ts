import { registerEnumType } from "@nestjs/graphql";

export enum Status {
  processing = "processing",
  completed = "completed",
  canceled = "canceled",
}

registerEnumType(Status, {
  name: "Status",
});
