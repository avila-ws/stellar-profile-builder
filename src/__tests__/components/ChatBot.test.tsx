import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';
import ChatBot from '../../components/ChatBot';

describe('ChatBot Component', () => {
  // Función auxiliar para abrir el chat
  const openChat = () => {
    // Buscar el primer botón que aparece (que será el botón del chat)
    const chatButton = screen.getByRole('button');
    fireEvent.click(chatButton);
  };

  test('renders chat button initially', () => {
    render(<ChatBot />);
    const chatButton = screen.getByRole('button');
    expect(chatButton).toBeInTheDocument();
    expect(chatButton).toHaveClass('rounded-full');  // El botón del chat es redondo
  });

  test('opens chat interface when clicking button', () => {
    render(<ChatBot />);
    openChat();
    // Verificar que el textarea está presente después de abrir el chat
    expect(screen.getByPlaceholderText(/type a message/i)).toBeInTheDocument();
    // Verificar que el botón de envío está presente (será el segundo botón en el DOM)
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(1);  // Debe haber al menos dos botones
  });

  test('shows initial message and quick options when chat is opened', () => {
    render(<ChatBot />);
    openChat();
    // Verificar el mensaje inicial del asistente
    expect(screen.getByText(/hi there! i'm renzo avila's virtual assistant/i)).toBeInTheDocument();
    expect(screen.getByText(/i can help you learn more about renzo's profile/i)).toBeInTheDocument();
    expect(screen.getByText(/select one of the quick options below/i)).toBeInTheDocument();
    expect(screen.getByText(/or type your question in the chat/i)).toBeInTheDocument();
    // Verificar que las opciones rápidas están presentes
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(3);
    const buttonWithEmoji = buttons.some(button => 
      button.textContent?.includes('💼') || 
      button.textContent?.includes('🛠️') || 
      button.textContent?.includes('📱') ||
      button.textContent?.includes('⛓️') ||
      button.textContent?.includes('🔒') ||
      button.textContent?.includes('📍')
    );
    expect(buttonWithEmoji).toBe(true);
  });
}); 