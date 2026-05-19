export type LogEntry = {
  date: string;
  title: string;
  summary: string;
  learnings: string[];
  tags: string[];
};

export const logs: LogEntry[] = [
  {
    date: '2026-05-18',
    title: 'LINE Bot の Google OAuth が7日で勝手に切れる',
    summary:
      '毎朝走らせていた LINE 配信が、3日前から無言で停止していた。原因は Google OAuth テストアプリの7日失効ポリシー。',
    learnings: [
      'sensitive scope（Gmail/Calendar）を使うテストアプリの refresh token は7日で失効する',
      '完全恒久対策（Verification申請）は個人開発には過大。「7日に1回再認証」を運用前提に組み込むのが現実解',
      '沈黙のエラーは最も怖い。配信ゼロでも気付けない構造を作らない',
    ],
    tags: ['Google OAuth', 'LINE', '個人開発', '運用'],
  },
  {
    date: '2026-05-17',
    title: 'ターミナル罫線で日本語が消える、フォールバックの限界',
    summary:
      'Markdown テーブルの罫線に隣接した日本語が画面から脱落する症状。前日の対策（フォールバックペア）では足りなかった。',
    learnings: [
      'East Asian Width の定義が異なるフォントをfallbackすると、罫線セルでズレが累積する',
      'Cascadia Mono の見た目より、CJK混在の正確さを優先するのが Claude Code 運用の正解',
      '解は BIZ UDGothic 単一指定。Windows 標準同梱だから追加インストールも不要',
    ],
    tags: ['Windows Terminal', 'フォント', '文字化け'],
  },
  {
    date: '2026-05-16',
    title: 'ターミナル絵文字隣の日本語が消える、フォント未指定が真犯人',
    summary:
      '絵文字の左右にある日本語が画面表示から消える症状。データは正常。レンダリング側の問題で、デフォルトフォントが原因だった。',
    learnings: [
      'chcp 65001 と UTF-8 が揃っていても、フォントが CJK グリフを持たなければ表示は崩れる',
      '文字化けを疑う前にフォントを疑う。データを疑うのは3番目',
      'Windows クライアントへ Claude Code を入れる時は、最初にフォント設定を必ずやる',
    ],
    tags: ['Windows Terminal', 'フォント', 'クライアント納品'],
  },
];
