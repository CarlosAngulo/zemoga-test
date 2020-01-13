export interface PublicFigure {
  name: string;
  quote: string;
  votes: {
      up: number;
      down: number;
  };
  category: string;
  update: Date;
  picture: string;
  _id: string;
}
