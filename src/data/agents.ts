import type { ImageMetadata } from 'astro';
import secretaryImg from '../assets/agents/secretary.png';
import contentStrategyImg from '../assets/agents/content-strategy.png';
import designConsultantImg from '../assets/agents/design-consultant.png';
import securityGuardImg from '../assets/agents/security-guard.png';
import customerSupportImg from '../assets/agents/customer-support.png';
import accountingImg from '../assets/agents/accounting.png';
import researchAssistantImg from '../assets/agents/research-assistant.png';
import engineerAssistantImg from '../assets/agents/engineer-assistant.png';
import bizdevStrategyImg from '../assets/agents/bizdev-strategy.png';

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
  /** 動くHTMLデモの公開パス。設定されると 16:9 枠に iframe で埋め込む（録画不要・最優先） */
  demoEmbed?: string;
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
    slug: 'customer-support',
    name: 'カスタマーサポートAI',
    tag: 'カスタマーサポート',
    pain: '問い合わせ対応に追われて本業が進まず、担当者ごとに対応品質がばらつく',
    oneLineValue: '問い合わせの返信下書きとエスカレーション判定で、対応品質を均すサポート担当。',
    outcomes: [
      'FAQ・問い合わせへの返信ドラフト作成',
      '緊急度・感情・金額の3軸で振り分け',
      '顧客の声（VOC）を集約して改善ポイントを抽出',
    ],
    image: customerSupportImg,
    posterImage: customerSupportImg,
    techStack: ['Claude Code', '業種プロファイル差し替え', '3軸エスカレーション判定ロジック'],
    demoEmbed: '/demos/customer-support.html',
  },
  {
    slug: 'secretary',
    name: 'AI秘書',
    tag: '業務支援',
    pain: 'メール対応とスケジュール調整に時間をとられている経営者・管理職',
    oneLineValue: 'メール返信とスケジュール調整を肩代わりする、毎朝動くAI秘書。',
    outcomes: [
      '予定・メール・天気を毎朝1通にまとめてLINEへ自動配信',
      '受信メールを読んで返信ドラフトを3案作成',
      '文体・署名を設定して自分らしい文面を維持',
      'スケジュール確認と候補日の整理',
    ],
    image: secretaryImg,
    posterImage: secretaryImg,
    techStack: ['Claude Code', 'Gmail / Calendar 連携', '定期実行（朝のブリーフィング）'],
    demoVideo: '/demos/secretary.mp4',
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
    slug: 'research-assistant',
    name: 'リサーチャーAI',
    tag: '市場リサーチ',
    pain: '何から調べればいいか分からず、ネット情報を鵜呑みにして判断を誤らないか不安',
    oneLineValue: '競合・業界・顧客を一次情報まで掘り下げ、事実と推測を分けて渡す「調べる相棒」。',
    outcomes: [
      '競合モニタリングを決まった型で定点観測',
      '業界動向・顧客ニーズを構造化レポートに整理',
      '事実と推測をラベル分けし、根拠の薄い主張は要検証として明示',
    ],
    image: researchAssistantImg,
    posterImage: researchAssistantImg,
    techStack: ['Claude Code', 'Web 検索・一次情報リサーチ（決算 / IR / 公的統計）', '多段ワークフロー（計画→収集→クロスチェック→検証）'],
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
      'APIキー漏洩巡回とゼロトラスト診断',
      'CLAUDE.md・hooks・MCPスコープなどAI自動化設定の監査',
      'ツール導入前チェックと定期監視レポート',
    ],
    image: securityGuardImg,
    posterImage: securityGuardImg,
    techStack: ['Claude Code', '設定ファイル監査（CLAUDE.md / hooks / MCP）', '定期巡回（週次・月次）'],
  },
  {
    slug: 'engineer-assistant',
    name: 'エンジニアAI',
    tag: '開発支援',
    pain: '一人開発で設計や技術選定の相談相手がおらず、動いても「これで正しいのか」を確かめられないまま進んでしまう',
    oneLineValue: '「動くこと」と「正しいこと」を分けて、確定の前に一度立ち止まって検証する開発の相棒。',
    outcomes: [
      '要件定義・アーキテクチャ設計・技術選定の壁打ち',
      'コードレビュー・デバッグ・テスト戦略',
      'セキュリティレビューと、批判役による二重チェック',
    ],
    image: engineerAssistantImg,
    posterImage: engineerAssistantImg,
    techStack: ['Claude Code', '本体＋批判役（監査）の二段構成', 'コードレビュー・テスト戦略支援'],
  },
  {
    slug: 'accounting',
    name: '経理AI',
    tag: '経理',
    pain: '領収書や仕訳の処理に追われ、月次の数字が見えるのが遅れて経営判断が後手になる',
    oneLineValue: '領収書処理から月次分析まで肩代わりして、お金まわりの不安を静かに整える経理担当。',
    outcomes: [
      '領収書・請求書の読み取りと仕訳ドラフト作成',
      '月次レポートの数値分析と気になる動きの抽出',
      '勘定科目の相談と経費精算の下書き',
    ],
    image: accountingImg,
    posterImage: accountingImg,
    techStack: ['Claude Code', '会計ソフト連携（freee / マネーフォワード / 弥生）', '税務情報の都度リサーチ'],
  },
  {
    slug: 'bizdev-strategy',
    name: '新規事業開発AI',
    tag: '新規事業開発',
    pain: '新規事業のアイデアはあるが、市場規模や競合の裏取り・事業計画への落とし込みを一人で抱え、判断の妥当性を確かめられない',
    oneLineValue: 'アイデア発想から市場規模の算出・競合分析・事業計画書まで、5つの役割で一気通貫に伴走する新規事業チーム。',
    outcomes: [
      '市場規模（TAM/SAM/SOM）の算出と競合・業界のリサーチ',
      'SWOT・3C・4P・ビジネスモデルキャンバスなどフレームワーク分析',
      '事業計画書・ピッチ資料への落とし込みと、批判役による検証',
    ],
    image: bizdevStrategyImg,
    posterImage: bizdevStrategyImg,
    techStack: ['Claude Code', '5役割チーム編成（統括・調査・分析・戦略・批判）', 'Web 検索によるディープリサーチ'],
    feature: true,
  },
];
