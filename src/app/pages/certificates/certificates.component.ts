import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Certificate {
  title: string;
  date: string;
  type: 'Faculdade' | 'Curso' | 'Diploma' | 'Evento';
  file: string;
}

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {

  showAllCertificates = false;

  toggleCertificates() {
  this.showAllCertificates = !this.showAllCertificates;

  if (this.showAllCertificates) {
    setTimeout(() => {
      document
        .getElementById('all-certificates')
        ?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
}



  certificates: Certificate[] = [
    {
      title: 'Microsoft Azure AI Fundamentals AI-900',
      date: '2022',
      type: 'Curso',
      file: 'assets/certificates/C2.pdf'
    },
    {
      title: 'Ensino médio com habilitação profissional de técnico em desenvolvimento de sistemas',
      date: '2022',
      type: 'Diploma',
      file: 'assets/certificates/D1.pdf'
    },
    {
      title: 'Tecnologia em Análise e Desenvolvimento de sistemas',
      date: '2025',
      type: 'Diploma',
      file: 'assets/certificates/D2.pdf'
    },
    {
      title: 'Productivity Strategies: Clarity, Purpose, and Task Prioritization',
      date: '2025',
      type: 'Curso',
      file: 'assets/certificates/C1.pdf'
    },
    {
      title: 'VIII Seminário de Iniciação Científica',
      date: '2025',
      type: 'Faculdade',
      file: 'assets/certificates/F1.pdf'
    },
    {
      title: 'Jogos Acadêmicos da FAMA',
      date: '2025',
      type: 'Faculdade',
      file: 'assets/certificates/F2.pdf'
    },
    {
      title: 'Techstars Startup Weekend PB 2024|Esporte',
      date: '2024',
      type: 'Evento',
      file: 'assets/certificates/E1.pdf'
    },
    {
      title: 'Palestra: "Inovação na Administração"',
      date: '2024',
      type: 'Faculdade',
      file: 'assets/certificates/F3.pdf'
    },
    {
      title: 'Palestra: "A Polissemia do Trabalho e a Diversidade - Perspectivas nas Empresas e Instituições de Ensino"',
      date: '2024',
      type: 'Faculdade',
      file: 'assets/certificates/F4.pdf'
    },
    {
      title: 'Evento História, Memória e Patrimônios regionais: campos e possibilidades',
      date: '2024',
      type: 'Faculdade',
      file: 'assets/certificates/F7.pdf'
    },
    {
      title: 'Palestra: Plano de arborização urbana',
      date: '2024',
      type: 'Faculdade',
      file: 'assets/certificates/F9.pdf'
    },
    {
      title: 'Palestra Otimismo racional: início do fim ou começo do novo',
      date: '2024',
      type: 'Faculdade',
      file: 'assets/certificates/F10.pdf'
    },
    {
      title: 'Palestra de Encerramento - Desenvolvimento Sustentável: Agenda 2030 e os ODS',
      date: '2023',
      type: 'Faculdade',
      file: 'assets/certificates/F16.pdf'
    },
    {
      title: 'Palestra de Encerramento: Tecnologia e Inovação voltadas ao Meio Ambiente',
      date: '2023',
      type: 'Faculdade',
      file: 'assets/certificates/F17.pdf'
    },
    {
      title: 'Palestra Dengue: dados epidemiológicos, identificação de larvas e vetores',
      date: '2023',
      type: 'Faculdade',
      file: 'assets/certificates/F18.pdf'
    },
    {
      title: 'Palestra de Abertura da Semana do Meio Ambiente',
      date: '2023',
      type: 'Faculdade',
      file: 'assets/certificates/F19.pdf'
    },
    {
      title: 'MiniCurso: Sistemas aplicados ao gerenciamento de empreendimentos energéticos',
      date: '2023',
      type: 'Faculdade',
      file: 'assets/certificates/F20.pdf'
    },
    {
      title: 'Palestra - Inovação, da ideia ao crescimento exponencial',
      date: '2023',
      type: 'Faculdade',
      file: 'assets/certificates/F21.pdf'
    },
    {
      title: 'VI Seminário de Iniciação Científica',
      date: '2023',
      type: 'Faculdade',
      file: 'assets/certificates/F22.pdf'
    },
    {
      title: 'MICROSOFT EXCEL 2016 BÁSICO',
      date: '2023',
      type: 'Curso',
      file: 'assets/certificates/C3.pdf'
    },
    {
      title: 'Liderança de Negócios com Cultura Ágil',
      date: '2022',
      type: 'Curso',
      file: 'assets/certificates/C9.pdf'
    },
    {
      title: 'Metodologia de gestão de projetos',
      date: '2022',
      type: 'Curso',
      file: 'assets/certificates/C10.pdf'
    },
    {
      title: 'Metodologias Ágeis e Ciclo de Desenvolvimento de Software',
      date: '2022',
      type: 'Curso',
      file: 'assets/certificates/C11.pdf'
    },
    {
      title: 'Projetos ágeis com SCRUM',
      date: '2022',
      type: 'Curso',
      file: 'assets/certificates/C12.pdf'
    },
  ];

  selectedType = 'todos';
  sortOrder: 'asc' | 'desc' = 'desc';

  get filteredCertificates() {
    let list = [...this.certificates];

    if (this.selectedType !== 'todos') {
      list = list.filter(c => c.type === this.selectedType);
    }

    list.sort((a, b) =>
      this.sortOrder === 'asc'
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date)
    );

    return list;
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
