import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Engenharia de Dados Corretora">
      <main style={{padding:'4rem', textAlign:'center'}}>
        <h1>Engenharia de Dados Corretora</h1>
        <p>Documentação oficial do pipeline de dados, arquitetura e boas práticas.</p>
        <a className="button button--primary" href="/docs/intro">
          Entrar na documentação
        </a>
      </main>
    </Layout>
  );
}
