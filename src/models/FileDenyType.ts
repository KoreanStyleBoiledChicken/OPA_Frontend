export interface FileDenyList {
    deny: Deny[]
  }
  
  export interface Deny {
    alertMessage: string
    alertObject: AlertObject
    alertScore: number
    ruleId: string
  }
  
  export interface AlertObject {
    externalObjects: ExternalObjects
    k8sApiObjects: any[]
  }
  
  export interface ExternalObjects {
    kind: string
    name: string
    namespace: string
    relatedObjects: RelatedObject[]
  }
  
  export interface RelatedObject {
    apiVersion: string
    kind: string
    metadata: Metadata
    rules?: Rule[]
    roleRef?: RoleRef
    subjects?: Subject[]
  }
  
  export interface Metadata {
    name: string
    namespace: string
  }
  
  export interface Rule {
    apiGroups: string[]
    resources: string[]
    verbs: string[]
  }
  
  export interface RoleRef {
    apiGroup: string
    kind: string
    name: string
  }
  
  export interface Subject {
    apiGroup?: string
    kind: string
    name: string
    namespace?: string
  }
  