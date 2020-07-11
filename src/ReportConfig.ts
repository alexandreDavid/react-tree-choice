export type ReportConfig = {
  enabled: boolean;
  children?: {
    [key: string]: ReportConfig;
  };
 };
 