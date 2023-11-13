export interface ImageDenyList {
    deny: Deny[]
  }
  
  export interface Deny {
    alertMessage: string
    alertObject: AlertObject
    ruleId: string
  }
  
  export interface AlertObject {
    k8SApiObjects: K8SapiObject[]
  }
  
  export interface K8SapiObject {
    kind: string
    metadata: Metadata
    spec: Spec
  }
  
  export interface Metadata {
    name: string
  }
  
  export interface Spec {
    containers: Container[]
  }
  
  export interface Container {
    image: string
    name: string
  }
  