export interface LocalizationFinding {
  file: string;
  line: number;
  start: number;
  end: number;
  text: string;
  kind: 'attribute' | 'string' | 'text' | 'template';
  translated: boolean;
}
export function inspectSource(file: string, source: string): { findings: LocalizationFinding[]; errors: string[] };
export function sourceFiles(directory: string): string[];
export function catalogKeys(directory: string): Set<string>;
export function missingTranslations(findings: LocalizationFinding[], keys: ReadonlySet<string>): LocalizationFinding[];
