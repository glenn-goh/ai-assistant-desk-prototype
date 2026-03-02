import type { ProjectFile } from '../types/project';

export const PROCUREMENT_FILES: Omit<ProjectFile, 'id' | 'uploadedAt'>[] = [
  {
    name: 'Guideline_AOR_v1.pdf',
    size: 2457600, // ~2.4 MB
  },
  {
    name: 'Standard_SVP_Template.docx',
    size: 512000, // ~500 KB
  },
  {
    name: 'AOR_Reference_2025.pdf',
    size: 1843200, // ~1.8 MB
  },
];

export function isProcurementProject(projectName: string): boolean {
  return projectName.toLowerCase().includes('procurement');
}

export function generateProcurementFiles(): ProjectFile[] {
  const now = new Date();
  return PROCUREMENT_FILES.map((file, index) => ({
    ...file,
    id: `procurement-${Date.now()}-${index}`,
    uploadedAt: now,
  }));
}
