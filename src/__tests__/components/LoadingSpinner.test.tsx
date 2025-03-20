import { render, screen } from '@testing-library/react';
import LoadingSpinner from '@/components/ui/loading-spinner';

describe('LoadingSpinner', () => {
  it('renders correctly', () => {
    render(<LoadingSpinner />);
    const spinnerElement = screen.getByRole('status');
    expect(spinnerElement).toBeInTheDocument();
    expect(spinnerElement).toHaveClass('animate-spin');
  });
}); 