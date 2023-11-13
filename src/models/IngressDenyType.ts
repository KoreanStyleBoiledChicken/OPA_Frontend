export interface IngressDenyList {
    deny: Deny[]
    input_name: string
    input_ns: string
    is_ingress: boolean
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
    namespace: string
  }
  
  export interface Spec {
    rules: Rule[]
  }
  
  export interface Rule {
    host: string
    http: Http
  }
  
  export interface Http {
    paths: Path[]
  }
  
  export interface Path {
    backend: Backend
    path: string
  }
  
  export interface Backend {
    serviceName: string
    servicePort: number
  }
  