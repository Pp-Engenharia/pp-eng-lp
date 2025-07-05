'use client';

import { FormEvent, useState } from 'react';

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    projeto: '',
    disciplinas: [] as string[]
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      console.log('Iniciando envio do email...');
      console.log('Dados do formulário:', formData);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Resposta da API:', data);

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar mensagem');
      }

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });

      // Limpa o formulário após o envio
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        projeto: '',
        disciplinas: []
      });
    } catch (error: any) {
      console.error('Erro detalhado ao enviar email:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: `Erro ao enviar mensagem: ${error.message || 'Erro desconhecido'}`
      });
    }
  };

  const handleDisciplinaChange = (value: string) => {
    setFormData(prev => {
      const disciplinas = prev.disciplinas.includes(value)
        ? prev.disciplinas.filter(d => d !== value)
        : [...prev.disciplinas, value];
      return { ...prev, disciplinas };
    });
  };

  return (
    <section id="contato" className="bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Solicite um orçamento
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg border">
          {status.message && (
            <div className={`p-4 rounded-md ${
              status.success ? 'bg-green-100 text-green-700' : 
              status.error ? 'bg-red-100 text-red-700' : ''
            }`}>
              {status.message}
            </div>
          )}
          <input
            type="text"
            placeholder="Nome completo"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Seu telefone"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            required
          />
          <textarea
            rows={4}
            placeholder="Descreva o seu projeto"
            className="w-full border border-gray-300 rounded-md px-4 py-3"
            value={formData.projeto}
            onChange={(e) => setFormData({ ...formData, projeto: e.target.value })}
            required
          />
          <div>
            <h3 className="text-lg font-semibold mb-2">Disciplinas de interesse:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="accent-orange-500" 
                  name="disciplinas" 
                  value="concreto"
                  checked={formData.disciplinas.includes('concreto')}
                  onChange={() => handleDisciplinaChange('concreto')}
                />
                Estruturas de Concreto Armado
              </label>
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="accent-orange-500" 
                  name="disciplinas" 
                  value="alvenaria"
                  checked={formData.disciplinas.includes('alvenaria')}
                  onChange={() => handleDisciplinaChange('alvenaria')}
                />
                Estruturas de Alvenaria Estrutural
              </label>
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="accent-orange-500" 
                  name="disciplinas" 
                  value="fundacoes"
                  checked={formData.disciplinas.includes('fundacoes')}
                  onChange={() => handleDisciplinaChange('fundacoes')}
                />
                Projeto de Fundações
              </label>
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="accent-orange-500" 
                  name="disciplinas" 
                  value="eletricas"
                  checked={formData.disciplinas.includes('eletricas')}
                  onChange={() => handleDisciplinaChange('eletricas')}
                />
                Projeto de Inst. Elétricas
              </label>
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="accent-orange-500" 
                  name="disciplinas" 
                  value="hidrossanitarias"
                  checked={formData.disciplinas.includes('hidrossanitarias')}
                  onChange={() => handleDisciplinaChange('hidrossanitarias')}
                />
                Projeto de Inst. Hidrossanitárias
              </label>
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="accent-orange-500" 
                  name="disciplinas" 
                  value="pluviais"
                  checked={formData.disciplinas.includes('pluviais')}
                  onChange={() => handleDisciplinaChange('pluviais')}
                />
                Projeto de Inst. Pluviais
              </label>
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="accent-orange-500" 
                  name="disciplinas" 
                  value="frigorigenas"
                  checked={formData.disciplinas.includes('frigorigenas')}
                  onChange={() => handleDisciplinaChange('frigorigenas')}
                />
                Projeto de Inst. Frigorígenas
              </label>
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="accent-orange-500" 
                  name="disciplinas" 
                  value="telecom"
                  checked={formData.disciplinas.includes('telecom')}
                  onChange={() => handleDisciplinaChange('telecom')}
                />
                Projeto de Telecomunicações
              </label>
              <label className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  className="accent-orange-500" 
                  name="disciplinas" 
                  value="gas"
                  checked={formData.disciplinas.includes('gas')}
                  onChange={() => handleDisciplinaChange('gas')}
                />
                Projeto de Inst. de Gás (GLP)
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-pp-blue hover:bg-pp-blue-hover text-white font-medium py-3 rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={status.loading}
          >
            {status.loading ? 'Enviando...' : 'Enviar solicitação'}
          </button>
        </form>
      </div>
    </section>
  );
} 