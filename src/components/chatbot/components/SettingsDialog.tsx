
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { AiModel } from '../types';

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  selectedModel: AiModel;
  setSelectedModel: (model: AiModel) => void;
  openaiApiKey: string;
  setOpenaiApiKey: (key: string) => void;
  claudeApiKey: string;
  setClaudeApiKey: (key: string) => void;
  saveSettings: () => void;
}

const SettingsDialog: React.FC<SettingsDialogProps> = ({
  open,
  onOpenChange,
  selectedModel,
  setSelectedModel,
  openaiApiKey,
  setOpenaiApiKey,
  claudeApiKey,
  setClaudeApiKey,
  saveSettings,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Configuración del Asistente</DialogTitle>
          <DialogDescription>
            Configura el modelo de IA para el asistente virtual.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="ai-model">Modelo de IA</Label>
            <Select 
              value={selectedModel} 
              onValueChange={(value) => setSelectedModel(value as AiModel)}
            >
              <SelectTrigger id="ai-model">
                <SelectValue placeholder="Selecciona un modelo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Respuestas predefinidas</SelectItem>
                <SelectItem value="openai">OpenAI (GPT)</SelectItem>
                <SelectItem value="claude">Anthropic (Claude)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {selectedModel === "openai" && (
            <div className="space-y-2">
              <Label htmlFor="openai-key">API Key de OpenAI</Label>
              <Input
                id="openai-key"
                value={openaiApiKey}
                onChange={(e) => setOpenaiApiKey(e.target.value)}
                placeholder="sk-..."
                className="col-span-3"
              />
            </div>
          )}
          
          {selectedModel === "claude" && (
            <div className="space-y-2">
              <Label htmlFor="claude-key">API Key de Claude</Label>
              <Input
                id="claude-key"
                value={claudeApiKey}
                onChange={(e) => setClaudeApiKey(e.target.value)}
                placeholder="sk-ant-..."
                className="col-span-3"
              />
            </div>
          )}
        </div>
        <DialogFooter>
          <Button 
            variant="outline" 
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>
          <Button 
            type="submit" 
            onClick={saveSettings}
            disabled={(selectedModel === "openai" && !openaiApiKey) || 
                      (selectedModel === "claude" && !claudeApiKey)}
          >
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
