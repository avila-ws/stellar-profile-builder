import { render, screen } from '@/test/test-utils';
import { describe, expect, it } from 'vitest';
import ExperienceSection from '@/components/ExperienceSection';

describe('ExperienceSection', () => {
  it('renderiza correctamente', () => {
    render(<ExperienceSection />);
    
    // Verificar que el título está presente
    const title = screen.getByRole('heading', { name: 'Experience' });
    expect(title).toBeDefined();
    
    // Verificar que los componentes WorkHistory y TechnicalSkills están presentes
    const workHistory = screen.getByText('Work History');
    expect(workHistory).toBeDefined();
    
    const technicalSkills = screen.getByText('Technical Skills');
    expect(technicalSkills).toBeDefined();
  });
}); 