import { AstroTime } from "./AstroTime";
export interface IAstroObject {
  astro: AstroTime;
  offset: number;
  date: Date;
}
