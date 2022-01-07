import { NavItemDefinition } from './types'

export const navigation: NavItemDefinition[] = [
  {
    slug: '',
  },
  {
    title: {
      en: 'About The Graph',
      ar: 'حول The Graph',
      ko: 'The Graph 소개',
      zh: '关于 The Graph',
      ja: 'The Graphについて',
      es: 'Acerca de The Graph',
    },
    slug: 'about',
    children: [
      {
        slug: 'introduction',
      },
      {
        slug: 'network',
      },
    ],
  },
  {
    divider: true,
  },
  {
    title: {
      en: 'Developer',
      ar: 'مطور',
      ko: '개발자',
      zh: '开发商',
      ja: 'デベロッパー',
      es: 'Desarrollador',
    },
    slug: 'developer',
    children: [
      {
        slug: 'quick-start',
      },
      {
        slug: 'define-subgraph-hosted',
      },
      {
        slug: 'create-subgraph-hosted',
      },
      {
        slug: 'publish-subgraph',
      },
      {
        slug: 'query-the-graph',
      },
      {
        slug: 'querying-from-your-app',
      },
      {
        slug: 'distributed-systems',
      },
      {
        slug: 'assemblyscript-api',
      },
      {
        slug: 'assemblyscript-migration-guide',
      },
      {
        slug: 'graphql-api',
      },
      {
        slug: 'matchstick',
      },
      {
        slug: 'deprecating-a-subgraph',
      },
      {
        slug: 'developer-faq',
      },
    ],
  },
  {
    slug: 'indexing',
  },
  {
    slug: 'delegating',
  },
  {
    slug: 'curating',
  },
  {
    divider: true,
  },
  {
    title: 'Subgraph Studio',
    slug: 'studio',
    children: [
      {
        slug: 'subgraph-studio',
      },
      {
        slug: 'deploy-subgraph-studio',
      },
      {
        slug: 'billing',
      },
      {
        slug: 'studio-faq',
      },
    ],
  },
  {
    slug: 'explorer',
  },
  {
    title: 'Hosted Service',
    slug: 'hosted-service',
    children: [
      {
        slug: 'what-is-hosted-service',
      },
      {
        slug: 'deploy-subgraph-hosted',
      },
      {
        slug: 'query-hosted-service',
      },
      {
        slug: 'migrating-subgraph',
      },
    ],
  },
  {
    divider: true,
  },
  {
    title: {
      en: 'Supported Networks',
      ar: 'الشبكات المدعومة',
      ko: '지원되는 네트워크',
      zh: '支持的网络',
      ja: 'サポートされているネットワーク',
      es: 'Redes compatibles',
    },
    slug: 'supported-networks',
    children: [
      {
        slug: 'near',
      },
    ],
  },
]
