import type { ImageMetadata } from 'astro';
import secretaryImg from '../assets/agents/secretary.png';
import contentStrategyImg from '../assets/agents/content-strategy.png';
import designConsultantImg from '../assets/agents/design-consultant.png';
import securityGuardImg from '../assets/agents/security-guard.png';
import customerSupportImg from '../assets/agents/customer-support.png';

export type Agent = {
  slug: string;
  name: string;
  tag: string;
  pain: string;
  outcomes: string[];
  image: ImageMetadata;
  /** 詳細ページの第一声。3秒で「何屋か」が伝わる粒度の一文（固有名は出さない） */
  oneLineValue: string;
  /** 詳細ページ 16:9 実演デモ枠のポスター画像。当面はキャラ画像を流用 */
  posterImage: ImageMetadata;
  /** 使っている機能（Claude Code 機能名・中立ラベル） */
  techStack: string[];
  /** true のとき、2カラムグリッドを横一杯にぶち抜く横長カード（画像左・テキスト右）で表示する */
  feature?: boolean;

  // --- 以下は Phase2 以降で後乗せする項目。型だけ用意し、当面は未設定でよい ---
  /** 実演デモ動画（mp4 等）の公開パス。設定されると 16:9 枠が動画に差し替わる */
  demoVideo?: string;
  /** 具体的なユースケース（before→after の文脈つき想定） */
  useCases?: string[];
  /** ビフォーアフター比較（画像ペア・見出し等。構造は Phase2 で確定） */
  beforeAfter?: { label: string; before: string; after: string }[];
  /** 関連する実装ログのスラッグ参照 */
  relatedLogs?: string[];
};

export const agents: Agent[] = [
  {
    slug: 'secretary',
    name: 'AI秘書',
    tag: '業務支援',
    pain: 'メール対応とスケジュール調整に時間をとられている経営者・管理職',
    oneLineValue: 'メール返信とスケジュール調整を肩代わりする、毎朝動くAI秘書。',
    outcomes: [
      '受信メールを読んで返信ドラフトを3案作成',
      '文体・署名を設定して自分らしい文面を維持',
      'スケジュール確認と候補日の整理',
    ],
    image: secretaryImg,
    posterImage: secretaryImg,
    techStack: ['Claude Code', 'Gmail / Calendar 連携', '定期実行（朝のブリーフィング）'],
  },
  {
    slug: 'content-strategy',
    name: 'コンテンツ戦略AI',
    tag: 'マーケティング',
    pain: 'SNSの更新が止まる、何を投稿すればいいか思いつかない',
    oneLineValue: '止まりがちなSNS発信を、企画から伴走して続けさせるコンテンツ参謀。',
    outcomes: [
      'Xに特化した投稿ネタの企画',
      '競合アカウントのリサーチと分析',
      '一貫したトーンでのコンテンツ案出し',
    ],
    image: contentStrategyImg,
    posterImage: contentStrategyImg,
    techStack: ['Claude Code', 'Web 検索リサーチ', 'スプレッドシート連携（投稿管理）'],
  },
  {
    slug: 'design-consultant',
    name: 'デザインコンサルタント',
    tag: 'ビジュアル',
    pain: '提案資料やSNS画像の見た目が素人っぽくなり、信頼に直結しない',
    oneLineValue: '資料もSNS画像も「それっぽく」整える、審美眼とアクセシビリティ基準を持つデザイン伴走者。',
    outcomes: [
      '提案スライドの構成とビジュアル設計',
      'X・SNS用画像・サムネ・OGPの制作',
      'Webサイト・LPの配色とトンマナ設計',
    ],
    image: designConsultantImg,
    posterImage: designConsultantImg,
    techStack: ['Claude Code', 'Canva 連携', 'WCAG コントラスト検証'],
  },
  {
    slug: 'security-guard',
    name: 'セキュリティAI',
    tag: 'セキュリティ',
    pain: 'APIキーや認証情報、AI自動化の設定が無防備なまま増え、漏れたときに気づけない',
    oneLineValue: '「漏れる前提」で設計する、APIキー巡回とAI設定監査のゼロトラスト番人。',
    outcomes: [
      'APIキー・認証情報の漏洩巡回とゼロトラスト診断',
      'CLAUDE.md・hooks・MCPスコープなどAI自動化設定の監査',
      '新しいツール導入前の安全チェックと定期監視レポート',
    ],
    image: securityGuardImg,
    posterImage: securityGuardImg,
    techStack: ['Claude Code', '設定ファイル監査（CLAUDE.md / hooks / MCP）', '定期巡回（週次・月次）'],
  },
  {
    slug: 'customer-support',
    name: 'カスタマーサポートAI',
    tag: 'カスタマーサポート',
    pain: '問い合わせ対応に追われて本業が進まず、担当者ごとに対応品質がばらつく',
    oneLineValue: '問い合わせの返信下書きとエスカレーション判定で、対応品質を均すサポート担当。',
    outcomes: [
      'FAQ・問い合わせへの返信ドラフト作成',
      '緊急度・感情・金額影響の3軸でエスカレーション判定',
      '顧客の声（VOC）を集約して改善ポイントを抽出',
    ],
    image: customerSupportImg,
    posterImage: customerSupportImg,
    techStack: ['Claude Code', '業種プロファイル差し替え', '3軸エスカレーション判定ロジック'],
    feature: true,
  },
];
