import type { ImageMetadata } from 'astro';
import secretaryImg from '../assets/agents/secretary.png';
import contentStrategyImg from '../assets/agents/content-strategy.png';
import designConsultantImg from '../assets/agents/design-consultant.png';
import securityGuardImg from '../assets/agents/security-guard.png';

export type Agent = {
  slug: string;
  name: string;
  tag: string;
  pain: string;
  outcomes: string[];
  image: ImageMetadata;
};

export const agents: Agent[] = [
  {
    slug: 'secretary',
    name: 'AI秘書',
    tag: '業務支援',
    pain: 'メール対応とスケジュール調整に時間をとられている経営者・管理職',
    outcomes: [
      '受信メールを読んで返信ドラフトを3案作成',
      '文体・署名を設定して自分らしい文面を維持',
      'スケジュール確認と候補日の整理',
    ],
    image: secretaryImg,
  },
  {
    slug: 'content-strategy',
    name: 'コンテンツ戦略AI',
    tag: 'マーケティング',
    pain: 'SNSの更新が止まる、何を投稿すればいいか思いつかない',
    outcomes: [
      'Xに特化した投稿ネタの企画',
      '競合アカウントのリサーチと分析',
      '一貫したトーンでのコンテンツ案出し',
    ],
    image: contentStrategyImg,
  },
  {
    slug: 'design-consultant',
    name: 'デザインコンサルタント',
    tag: 'ビジュアル',
    pain: '提案資料やSNS画像の見た目が素人っぽくなり、信頼に直結しない',
    outcomes: [
      '提案スライドの構成とビジュアル設計',
      'X・SNS用画像・サムネ・OGPの制作',
      'Webサイト・LPの配色とトンマナ設計',
    ],
    image: designConsultantImg,
  },
  {
    slug: 'security-guard',
    name: 'セキュリティAI',
    tag: 'セキュリティ',
    pain: 'APIキーや認証情報、AI自動化の設定が無防備なまま増え、漏れたときに気づけない',
    outcomes: [
      'APIキー・認証情報の漏洩巡回とゼロトラスト診断',
      'CLAUDE.md・hooks・MCPスコープなどAI自動化設定の監査',
      '新しいツール導入前の安全チェックと定期監視レポート',
    ],
    image: securityGuardImg,
  },
];
