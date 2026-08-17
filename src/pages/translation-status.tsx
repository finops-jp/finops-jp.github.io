import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import clsx from 'clsx';

import statusData from '@site/.translation-status.json';

type StatusEntry = {
  source_url?: string;
  source_hash?: string;
  translation_status?: string;
  docs_path?: string | null;
  last_crawl?: string | null;
};

type StatusData = Record<string, StatusEntry>;

function getStats(data: StatusData) {
  const entries = Object.values(data);
  const total = entries.length;
  const machine = entries.filter(e => e.translation_status === 'machine').length;
  const reviewed = entries.filter(e => e.translation_status === 'reviewed').length;
  const notTranslated = entries.filter(e => e.translation_status === 'not_translated').length;
  const translated = machine + reviewed;
  const pct = total > 0 ? Math.round((translated / total) * 100) : 0;
  return { total, machine, reviewed, notTranslated, translated, pct };
}

function getCategoryStats(data: StatusData) {
  const categories: Record<string, { total: number; translated: number }> = {};
  for (const [key, entry] of Object.entries(data)) {
    const cat = key.split('/')[0];
    if (!categories[cat]) {
      categories[cat] = { total: 0, translated: 0 };
    }
    categories[cat].total++;
    if (entry.translation_status === 'machine' || entry.translation_status === 'reviewed') {
      categories[cat].translated++;
    }
  }
  return categories;
}

function ProgressBar({ value, max }: { value: number; max: number }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{
        flex: 1,
        height: '20px',
        backgroundColor: '#e0e0e0',
        borderRadius: '4px',
        overflow: 'hidden',
      }}>
        <div style={{
          width: `${pct}%`,
          height: '100%',
          backgroundColor: pct >= 80 ? '#4caf50' : pct >= 50 ? '#8bc34a' : pct >= 30 ? '#ffc107' : '#ff9800',
          borderRadius: '4px',
          transition: 'width 0.3s',
        }} />
      </div>
      <span style={{ minWidth: '45px', textAlign: 'right', fontWeight: 'bold' }}>{pct}%</span>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { label: string; color: string }> = {
    machine: { label: '機械翻訳', color: '#2196f3' },
    reviewed: { label: '手直し済み', color: '#4caf50' },
    not_translated: { label: '未翻訳', color: '#9e9e9e' },
    deleted: { label: '削除', color: '#f44336' },
  };
  const { label, color } = config[status] || { label: status, color: '#9e9e9e' };
  return (
    <span style={{
      padding: '2px 8px',
      borderRadius: '12px',
      backgroundColor: color,
      color: 'white',
      fontSize: '0.75rem',
      fontWeight: 'bold',
    }}>
      {label}
    </span>
  );
}

export default function TranslationStatus(): React.ReactNode {
  const data = statusData as StatusData;
  const stats = getStats(data);
  const categories = getCategoryStats(data);

  return (
    <Layout title="翻訳状況" description="FinOps Foundation コンテンツの翻訳カバー率">
      <main className="container margin-vert--lg">
        <Heading as="h1">翻訳状況</Heading>
        <p>
          FinOps Foundation 公式サイトのコンテンツを日本語に翻訳するプロジェクトの進捗状況です。
        </p>

        {/* 全体サマリー */}
        <div className="row margin-bottom--lg">
          <div className="col col--6">
            <div className="card padding--md">
              <Heading as="h3">全体カバー率</Heading>
              <ProgressBar value={stats.translated} max={stats.total} />
              <p style={{ marginTop: '8px', color: '#666' }}>
                {stats.translated} / {stats.total} ページ翻訳済み
              </p>
            </div>
          </div>
          <div className="col col--6">
            <div className="card padding--md">
              <Heading as="h3">内訳</Heading>
              <table>
                <tbody>
                  <tr><td><StatusBadge status="reviewed" /></td><td>手直し済み</td><td><strong>{stats.reviewed}</strong></td></tr>
                  <tr><td><StatusBadge status="machine" /></td><td>機械翻訳</td><td><strong>{stats.machine}</strong></td></tr>
                  <tr><td><StatusBadge status="not_translated" /></td><td>未翻訳</td><td><strong>{stats.notTranslated}</strong></td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* カテゴリ別 */}
        <Heading as="h2">カテゴリ別カバー率</Heading>
        <div className="row margin-bottom--lg">
          {Object.entries(categories).sort().map(([cat, { total, translated }]) => (
            <div key={cat} className="col col--6 margin-bottom--md">
              <div className="card padding--md">
                <Heading as="h4">{cat}</Heading>
                <ProgressBar value={translated} max={total} />
                <p style={{ marginTop: '4px', color: '#666', fontSize: '0.85rem' }}>
                  {translated} / {total} ページ
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 詳細テーブル */}
        <Heading as="h2">ページ一覧</Heading>
        <table>
          <thead>
            <tr>
              <th>パス</th>
              <th>ステータス</th>
              <th>オリジナル</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data)
              .filter(([_, e]) => e.translation_status !== 'deleted')
              .sort(([a], [b]) => a.localeCompare(b))
              .map(([key, entry]) => (
                <tr key={key}>
                  <td><code>{key}</code></td>
                  <td><StatusBadge status={entry.translation_status || 'not_translated'} /></td>
                  <td>
                    {entry.source_url && (
                      <a href={entry.source_url} target="_blank" rel="noopener noreferrer">
                        原文
                      </a>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>
    </Layout>
  );
}
