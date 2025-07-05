import { NextResponse } from 'next/server';
import { resend } from '@/config/resend';

// Mapeamento dos IDs das disciplinas para seus nomes completos
const disciplinasMap: { [key: string]: string } = {
  concreto: 'Estruturas de concreto armado',
  alvenaria: 'Estruturas de Alvenaria Estrutural',
  fundacoes: 'Projeto de fundações',
  eletricas: 'Projeto de Inst. Elétricas',
  hidrossanitarias: 'Projeto de Inst. Hidrossanitárias',
  pluviais: 'Projeto de Inst. Pluviais',
  frigorigenas: 'Projeto de Inst. Frigorígenas',
  telecom: 'Projeto de Telecomunicações',
  gas: 'Projeto de Inst. de Gás (GLP)'
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, email, telefone, projeto, disciplinas } = body;

    // Converter os IDs das disciplinas para seus nomes completos
    const disciplinasNomes = disciplinas.map((id: string) => disciplinasMap[id] || id);

    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL!!,
      to: [process.env.FROM_EMAIL!!],
      subject: 'Nova solicitação de orçamento - PP Engenharia',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Nova Solicitação de Orçamento</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background-color: #1e40af;
                color: white;
                padding: 20px;
                text-align: center;
                border-radius: 5px 5px 0 0;
              }
              .content {
                background-color: #f9fafb;
                padding: 20px;
                border: 1px solid #e5e7eb;
                border-radius: 0 0 5px 5px;
              }
              .section {
                margin-bottom: 20px;
                padding: 15px;
                background-color: white;
                border-radius: 5px;
                box-shadow: 0 1px 3px rgba(0,0,0,0.1);
              }
              .label {
                font-weight: bold;
                color: #1e40af;
                display: block;
                margin-bottom: 5px;
              }
              .disciplinas-list {
                list-style: none;
                padding: 0;
                margin: 0;
              }
              .disciplinas-list li {
                background-color: #f3f4f6;
                padding: 8px 12px;
                margin-bottom: 5px;
                border-radius: 4px;
                display: inline-block;
                margin-right: 5px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 0.9em;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Nova Solicitação de Orçamento</h1>
            </div>
            <div class="content">
              <div class="section">
                <span class="label">Nome do Cliente:</span>
                <p>${nome}</p>
              </div>
              
              <div class="section">
                <span class="label">Email para Contato:</span>
                <p>${email}</p>
              </div>

              <div class="section">
                <span class="label">Telefone para Contato:</span>
                <p>${telefone}</p>
              </div>
              
              <div class="section">
                <span class="label">Descrição do Projeto:</span>
                <p>${projeto}</p>
              </div>
              
              <div class="section">
                <span class="label">Disciplinas de Interesse:</span>
                <ul class="disciplinas-list">
                  ${disciplinasNomes.map((disciplina: string) => `<li>${disciplina}</li>`).join('')}
                </ul>
              </div>
            </div>
            <div class="footer">
              <p>Esta mensagem foi enviada através do formulário de contato do site PP Engenharia.</p>
              <p>Data: ${new Date().toLocaleDateString('pt-BR')}</p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
} 