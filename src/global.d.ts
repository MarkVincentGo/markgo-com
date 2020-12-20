declare module '*.module.scss' {
  // eslint-disable-next-line import/no-unresolved
  import { DocumentNode } from 'module.scss';

  const value: DocumentNode;
  export = value;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module '*.css' {
  const content: any;
  export default content;
}
