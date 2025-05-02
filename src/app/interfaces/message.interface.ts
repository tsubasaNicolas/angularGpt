export interface Message {
  text: string;
  isGpt: boolean;
  imageInfo?: {
    url: string;
    alt: string;
  };
  audioUrl?: string;
  info?: {
    userScore: number;
    errors: string[];
    message: string;
  };
}
